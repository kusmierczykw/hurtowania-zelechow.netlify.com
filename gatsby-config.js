module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Witold Mucha | Sprzedaż hurtowa art. przemysłowych i chemii gospodarczej",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-RMHF103NDQ",
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
