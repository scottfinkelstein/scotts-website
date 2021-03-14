module.exports = {
  siteMetadata: {
    title: `Scott Finkelstein`,
    description: `Exploring the spaces between technology, design, leadership, and learning.`,
    author: `Scott Finkelstein`,
    twitter: `SBF02`,
    instagram: `scott.finkelstein`
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat"
            },
            {
              family: "Merriweather"
            }
          ]
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
        name: 'assets'
      }
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Montserrat`
    //       },
    //       {
    //         family: `Merriweather`
    //       }
    //     ]
    //   }
    // },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer`
            }
          },

          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              gistCssUrlAddress: 'https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css'
            }
          },

          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400
            }
          }

        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
