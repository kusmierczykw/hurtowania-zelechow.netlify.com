module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hurtownia-zelechow.pl",
    title: "Witold Mucha | Sprzedaż hurtowa art. przemysłowych i chemii gospodarczej",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RMHF103NDQ",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
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
