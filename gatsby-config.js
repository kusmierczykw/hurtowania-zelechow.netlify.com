module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: ".",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "XXX",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
        duration: 100
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap"
  ],
};
