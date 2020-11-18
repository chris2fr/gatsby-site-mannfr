require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://alpha.mann.fr`,
    title: `gatsby-theme-mann-fr`,
    description: "MANN.FR Website",
    author: `Chris Mann <chris@mann.fr>`,
  },
  plugins: [
    `gatsby-image`,
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
        path: `${__dirname}/content/published/post/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tags`,
        path: `${__dirname}/content/tags/`,
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
