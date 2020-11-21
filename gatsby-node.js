function slugger (path) {
  let pathComponents = path.split("/")
  let ret = pathComponents.pop()
  ret = (ret)?ret:pathComponents.pop()
  return ret
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter implements Node {
      description: String
      tags: [String]
      order: String
      type: String
      path: String
      slug: String
      title: String
    }
  `
  createTypes(typeDefs)
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions}) => {
  if (node.internal.type === "Mdx") {

    const relativeFilePath = createFilePath({ node, getNode, trailingSlash:false});
    // relativeFilePath = (node.frontmatter.type)?`${relativeFilePath}/${node.frontmatter.type}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.visibility)?`${relativeFilePath}/${node.frontmatter.visibility}`:relativeFilePath;
    // relativeFilePath = (node.frontmatter.tags && node.frontmatter.tags.length > 0 && node.frontmatter.type && node.frontmatter.type != "tag")?`${relativeFilePath}/${node.frontmatter.tags[0]}`:relativeFilePath;

    actions.createNodeField({ node, name: "path", value: `${relativeFilePath}`});
    actions.createNodeField({ node, name: "slug", value: slugger(relativeFilePath)});

    //actions.createNodeField({ node, name: "slug", value: `${relativeFilePath}`});
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {

  const mdxQueryResult = await graphql(`
   {
    posts: allMdx(filter: {frontmatter: {type: {ne: "tag"}}}) {
      nodes {
        fields {
          path
          slug
        }
      }
    }
    tags: allMdx(filter: {frontmatter: {type: {eq: "tag"}}}) {
      nodes {
        fields {
          path
          slug
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

  posts.forEach(({ fields: node }) => {
    actions.createPage({
      path: node.path,
      // slug: node.slug,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: slugger(node.slug),
        to: node.path
      },
    }) 
    // actions.createNodeField({ node, name: "path", value: `${relativeFilePath}`});
  })

  mdxQueryResult.data.tags.nodes.forEach(({ fields: node }) => {
    actions.createPage({
      path: node.path,
      slug: node.slug,
      component: require.resolve(`./src/templates/tag.js`),
      context: {
        slug: node.slug,
        tag: node.slug,
        to: node.path
      },
    }) 
  })
}

