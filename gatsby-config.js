require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://alpha.mann.fr`,
    title: `gatsby-mann-fr`,
    description: 'MANN.FR Website',
    author: `Chris Mann <chris@mann.fr>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "static",
        path: `${__dirname}/static/`,
      },
    },
  ],
}