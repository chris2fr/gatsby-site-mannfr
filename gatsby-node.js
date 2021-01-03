// const localesDir = "./i18n/lingui"
// const path = require("path")
// let didRunAlready = false
const crypto = require('crypto');

const configI18n = require("./locales/config.json")
var configLocales = {}
configI18n.map (item =>
  configLocales[item.code] = item
  )

function slugger (path) {
  let pathComponents = path.split("/")
  let ret = pathComponents.pop()
  ret = (ret)?ret:pathComponents.pop()
  return ret
}

function localer (fileAbsolutePath) {
  let realLocale = fileAbsolutePath.split("/")
  realLocale = (realLocale)?realLocale.pop():null;
  if (realLocale) {
    realLocale = realLocale.split(".");
    (realLocale)?realLocale.pop():null;
    realLocale  = (realLocale)?realLocale.pop():null;
  }
  return (realLocale && realLocale.includes(".")?realLocale:"en-FR") // Replace static type by value from gatsby-config.js
}

// exports.onPreInit = ({ store }, { localeDir }) => {
//   // localeDir must be defined, no default option will be defined
//   if (!localesDir) {
//     throw new Error(`
//       Please define the 'localeDir' option of gatsby-theme-i18n-lingui
//     `)
//   }

//   if (didRunAlready) {
//     throw new Error(
//       `You can only have single instance of gatsby-theme-i18n-lingui in your gatsby-config.js`
//     )
//   }

//   didRunAlready = true
//   absoluteLocalesDirectory = path.join(
//     store.getState().program.directory,
//     localesDir
//   )

//   absoluteLocalesDirectory = path.join(
//     store.getState().program.directory,
//     "./i18n/lingui/locales"
//   )
// }

// exports.onCreateWebpackConfig = ({ actions, plugins }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       plugins.define({
//         GATSBY_THEME_I18N_LINGUI: JSON.stringify(absoluteLocalesDirectory),
//       }),
//     ],
//   })
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node @childOf(types: ["File", "Markdown"]) @infer {
      frontmatter: MdxFrontmatter @infer
      tags: [MannTag] @link(by: "id")
    }
    type MdxFrontmatter @infer {
      description: String @infer
      tags: [String]
      order: String @infer
      type: String @infer
      slug: String @infer
      title: String @infer
      created_at: Date @dateformat
      feature_image: File @fileByRelativePath
    }
    type MannTag implements Node {
      mdx: Mdx! @link(by: "id")
      slug: String!
      locale: String!
      tags: [MannTag] @link(by: "id")
    }
    type MannPost implements Node {
      mdx: Mdx! @link(by: "id")
      slug: String!
      locale: String!
      tags: [MannTag] @link(by: "id")
    }
  `
  createTypes(typeDefs)
}

const { createFilePath } = require(`gatsby-source-filesystem`)
// const { createNode } = require("typescript")

exports.onCreateNode = ({ node, getNode, actions}) => {
  if (node.internal.type === "Mdx") {
    let relativeFilePath = createFilePath({ node, getNode, trailingSlash:true}).replace(/\/$/,"");
    let originalPath = relativeFilePath
    let realLocale = relativeFilePath.split(".").pop()
    // relativeFilePath = (node.frontmatter.type)?`${relativeFilePath}/${node.frontmatter.type}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.visibility)?`${relativeFilePath}/${node.frontmatter.visibility}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.tags && node.frontmatter.tags.length > 0 && node.frontmatter.type && node.frontmatter.type != "tag")?`${relativeFilePath}/${node.frontmatter.tags[0]}`:relativeFilePath;
    if (realLocale && Object.keys(configLocales).includes(realLocale)) {
      originalPath = relativeFilePath.substring(0,relativeFilePath.length - realLocale.length -1).replace(/index$/,"")
      relativeFilePath = "/" + realLocale + originalPath
    } else {
      realLocale = "en-FR"
    }

    actions.createNodeField({ node, name: "uriPath", value: relativeFilePath});
    actions.createNodeField({ node, name: "uriSlug", value: slugger(relativeFilePath)});
    actions.createNodeField({ node, name: "realLocale", value: realLocale});
    actions.createNodeField({ node, name: "originalPath", value: originalPath});
    // actions.createNodeField({ node, name: "upslug", value: upslug});
    actions.createNodeField({ node, name: "dateFormat", value: configLocales[realLocale].dateFormat});
    //actions.createNodeField({ node, name: "locale", value: configLocales[realLocale].code});
    actions.createNodeField({ node, name: "hrefLang", value: configLocales[realLocale].hrefLang});
    // Below is tags per post
    let tagsToAdd = [];
    if (node.frontmatter && node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        // Kind of hacky
        tagsToAdd.push("/" + realLocale + "/tags/" + tag );
      })
    }
    if (["tag","hometag"].includes(node.frontmatter.type) ) {
      actions.createNode(
        {
        id: relativeFilePath,
        slug: slugger(relativeFilePath),
        locale: realLocale,
        mdx: node.id,
        tags: tagsToAdd,
        type: node.frontmatter.type,
        internal: {
          type: "MannTag",
          contentDigest: crypto
          .createHash(`md5`)
          .update(relativeFilePath)
          .digest(`hex`),
        } 
      });
    } else if (node.frontmatter.type === "post") {
      actions.createNode(
        {
        id: relativeFilePath,
        slug: slugger(relativeFilePath),
        locale: realLocale,
        mdx: node.id,
        tags: tagsToAdd,
        type: node.frontmatter.type,
        internal: {
          type: "MannPost",
          contentDigest: crypto
          .createHash(`md5`)
          .update(relativeFilePath)
          .digest(`hex`),
        } 
      });
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {

  const mdxQueryResult = await graphql(`
   {
    posts: allMdx(filter: {frontmatter: {type: {nin: ["hometag","tag"]}}}) {
      nodes {
        slug
        fields {
          uriPath
          uriSlug
          realLocale
          originalPath
          locale
          dateFormat
          hrefLang
        }
      }
    }
    tags: allMdx(filter: {frontmatter: {type: {in: ["hometag","tag"]}}}) {
      nodes {
        slug
        fields {
          uriPath
          uriSlug
          realLocale
          originalPath
          locale
          dateFormat
          hrefLang
        }
      }
    }
  }
  `);
  
  if (reporter.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }

  const posts = mdxQueryResult.data.posts.nodes;

  posts.forEach(node => {
    actions.createPage({
      path: node.fields.uriPath,
      //matchPath:  node.fields.originalPath,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        uriPath: node.fields.uriPath,
        uriSlug: node.fields.uriSlug,
        // upSlug: node.fields.upSlug,
        realLocale: node.fields.realLocale,
        originalPath: node.fields.originalPath,
        locale: node.fields.realLocale,
        hrefLang: node.fields.hrefLang,
        dateFormat: node.fields.dateFormat
      },
    }) 
    // actions.createNodeField({ node, name: "path", value: `${relativeFilePath}`});
  })

  mdxQueryResult.data.tags.nodes.forEach(node => {
    actions.createPage({
      path: node.fields.uriPath,
      //matchPath:  node.fields.originalPath,
      component: require.resolve(`./src/templates/tag.js`),
      context: {
        uriPath: node.fields.uriPath,
        uriSlug: node.fields.uriSlug,
        realLocale: node.fields.realLocale,
        originalPath: node.fields.originalPath,
        locale: node.fields.realLocale,
        hrefLang: node.fields.hrefLang,
        dateFormat: node.fields.dateFormat
      },
      locale: node.fields.realLocale
    }) 
  })
}

