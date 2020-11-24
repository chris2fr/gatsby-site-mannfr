// const localesDir = "./i18n/lingui"
// const path = require("path")
// let didRunAlready = false

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
    type MdxFrontmatter implements Node @infer {
      description: String
      tags: [String]
      order: String
      type: String
      slug: String
      title: String
      feature_image: File @dontInfer
    }

  `
  createTypes(typeDefs)
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions}) => {
  if (node.internal.type === "Mdx") {
    let relativeFilePath = createFilePath({ node, getNode, trailingSlash:false});
    let originalPath = relativeFilePath
    let realLocale = relativeFilePath.split(".").pop()
    // relativeFilePath = (node.frontmatter.type)?`${relativeFilePath}/${node.frontmatter.type}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.visibility)?`${relativeFilePath}/${node.frontmatter.visibility}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.tags && node.frontmatter.tags.length > 0 && node.frontmatter.type && node.frontmatter.type != "tag")?`${relativeFilePath}/${node.frontmatter.tags[0]}`:relativeFilePath;
    if (realLocale && Object.keys(configLocales).includes(realLocale)) {
      originalPath = relativeFilePath.substring(0,relativeFilePath.length - realLocale.length -1)
      relativeFilePath = "/" + realLocale + originalPath
    } else {
      realLocale = "en-FR"
    }

    actions.createNodeField({ node, name: "uriPath", value: relativeFilePath});
    actions.createNodeField({ node, name: "uriSlug", value: slugger(relativeFilePath)});
    actions.createNodeField({ node, name: "realLocale", value: realLocale});
    actions.createNodeField({ node, name: "originalPath", value: originalPath});
    actions.createNodeField({ node, name: "dateFormat", value: configLocales[realLocale].dateFormat});
    //actions.createNodeField({ node, name: "locale", value: configLocales[realLocale].code});
    actions.createNodeField({ node, name: "hrefLang", value: configLocales[realLocale].hrefLang});
    // actions.createNodeField({ node, name: "locale", value: localer(node.fileAbsolutePath)});
    // actions.createNodeField({ node, name: "slug", value: relativeFilePath});
    // actions.createNodeField({ node, name: "path", value: relativeFilePath});
    // actions.createNodeField({ node, name: "slug", value: `${relativeFilePath}`});
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {

  const mdxQueryResult = await graphql(`
   {
    posts: allMdx(filter: {frontmatter: {type: {ne: "tag"}}}) {
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
    tags: allMdx(filter: {frontmatter: {type: {eq: "tag"}}}) {
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

