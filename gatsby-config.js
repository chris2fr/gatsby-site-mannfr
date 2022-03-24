require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mann.fr`,
    title: `Digital Executive`,
    description: "MANN.FR, Chris, Digital Executive Idéaliste en Région Parisienne, Idéaliste et Créatif en Accompagnement, Ingénierie, Organisation, Accompagnement ",
    author: `Chris Mann <chris@mann.fr>`,
    logoRelativePathInSrcImages: "logo.png",
    name: 'mann.fr',
    hero: {
      heading: 'Digital Augmentation of Life can be Holistic',
      maxWidth: 652
    },
    social: [
      {
        name: 'twitter',
        url: `https://twitter.com/chris2fr`,
      },
    ],
  },
  plugins: [
    `react-google-recaptcha-v3`,
    `@hot-loader/react-dom`,
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./locales`,
        i18nextOptions: {
          ns: ["translation", "blog", "404"],
        },
      },
    },
    // `gatsby-plugin-sass`,
    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  type
                }
                body
                slug
                excerpt
                fields {
                  uriSlug
                  uriPath
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'path', 'title', 'excerpt', 'type','tags', 'path'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            path: node.fields.uriPath,
            title: node.frontmatter.title,
            body: node.body,
            excerpt: node.excerpt,
            type: node.frontmatter.type,
            tags: node.frontmatter.tags
          })),
      },
    },
    // {
    //   resolve: '@narative/gatsby-theme-novela',
    //   options: {
    //     contentPosts: 'content/narative-content/posts',
    //     contentAuthors: 'content/narative-content/authors',
    //     rootPath: '/',
    //     basePath: '/narative/',
    //     pageLength: 6,
    //     mailchimp: false,
    //     sources: {
    //       local: true,
    //       contentful: false,
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway']
        }
      }
    },
    `gatsby-image`,
    "react-helmet",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        /*/
        defaultLayouts: {
          default: require.resolve("./src/templates/default-mdx-layout.tsx"),
        },
        /*/
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/published`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en-FR`,
        locales: `en fr en-FR`, // process.env.LOCALES || `en fr`,
        configPath: require.resolve(`./locales/config.json`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path:  `${__dirname}/src/images/`,
      },
    },
  ],
};