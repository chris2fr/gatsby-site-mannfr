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
    const relativeFilePath = createFilePath({ node, getNode, basePath: "content/publisched/post/"});
    actions.createNodeField({ node, name: "slug", value: `/post${relativeFilePath}`})
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
  }
  `);

  const mdxQueryResultOther = await graphql(`
   {
    posts: allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
      nodes {
        childMdx {
          frontmatter {
            slug
            tags
            visibility
          }
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
}

