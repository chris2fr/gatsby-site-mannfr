const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
  """
  Markdown Node
  """
  type Mdx implements Node @infer {
    frontmatter: Frontmatter
  }

  """
  Markdown Frontmatter
  """
  type Frontmatter @infer {
    comment_id: String @dontInfer
  }`

  actions.createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions}) => {
  if (node.internal.type === "Mdx") {
    const relativeFilePath = createFilePath({ node, getNode, basePath: "content/"});
    actions.createNodeField({ node, name: "slug", value: `${node.frontmatter.type}${relativeFilePath}`});
    //actions.createNodeField({ node, name: "slug", value: `${relativeFilePath}`});
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {

  const mdxQueryResult = await graphql(`
   {
    posts: allMdx {
      nodes {
        fields {
          slug
        }
      }
    }
    tags: allMdx(filter: {frontmatter: {type: {eq: "tag"}}}) {
      nodes {
        fields {
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
      path: node.slug,
      component: require.resolve(`./src/templates/default-mdx-layout.js`),
      context: {
        slug: node.slug,
      },
    }) 
  })

  mdxQueryResult.data.tags.nodes.forEach(({ fields: node }) => {
    actions.createPage({
      path: "carousel/" + node.slug,
      component: require.resolve(`./src/templates/tag.js`),
      context: {
        slug: "carousel/" + node.slug,
      },
    }) 
  })
}

