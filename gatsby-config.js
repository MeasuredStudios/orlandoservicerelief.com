require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Orlando Service Relief`,
    description: `This is a directory of the Orlando Relief projects from around the world. Each directory promotes local fundraisers and resources to support bars, restaurants, service businesses and more affected by the COVID-19 health crisis around the world.`,
    author: `@jovanipink`,
    authorName: `Jovani Pink`,
    authorLink: `https://twitter.com/JovaniPink`,
    siteUrl: `https://www.orlandoservicerelief.com`,
    keywords:
      'Orlando Service Relief, Orlando, Orlando, FL, Central Florida',
    image: `/orlando.jpg`,
    state: `Florida`,
    city: `Orlando`,
    formId: process.env.AIRTABLE_EMBED_ID,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`, `gatsby-remark-static-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Orlando Relief`,
        short_name: `Orlando Relief`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/assets/images/heart.png`),
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     "fonts": [
    //       {
    //         "family": "Roboto",
    //         "variants": [
    //           "400",
    //           "400i",
    //           "700",
    //           "700i"
    //         ],
    //         "subsets": [
    //           "latin-ext"
    //         ]
    //       }
    //     ],
    //     "formats": [
    //       "woff",
    //       "woff2"
    //     ],
    //   },
    // },
    `gatsby-plugin-preact`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
