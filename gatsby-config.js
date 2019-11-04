module.exports = {
  pathPrefix: `/jasapek2`,
  // assetPrefix: `/pekjasa`,
  siteMetadata: {
    title: `Pek Jasa unifi Mobile™ | Daftar online`,
    description: `Pek jasa ialah pelan pasca bayar ekslusif untuk Penjawat Awam dari unifi Mobile™. Tawaran Pek Jasa ciri-ciri ini terhad sehingga 31 Disember 2019.`,
    author: `@unifi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "ms",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-XXXXXXXXX-X",
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pek Jasa unifi Mobile`,
        short_name: `Pek Jasa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `hsl(212, 74%, 34%)`,
        display: `minimal-ui`,
        icon: `src/images/unifi-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
