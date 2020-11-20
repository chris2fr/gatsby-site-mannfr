require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://alpha.mann.fr`,
    title: `Mann.fr Digital Wellbeing`,
    description: "MANN.FR Website",
    author: `Chris Mann <chris@mann.fr>`,
    logoRelativePathInSrcImages: "logo.png",
    name: 'mann.fr',
    description: "Mann.fr is about making things work with Digital and with Humans in Organizations.",
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
        name: `tags`,
        path: `${__dirname}/content/tags`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/published`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `tags`,
    //     path: `${__dirname}/content/tags/`,
    //   },
    // },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `un`,
        locales: `un en fr`, // process.env.LOCALES || `en fr`,
        configPath: require.resolve(`./i18n/config.json`),
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