require("dotenv").config();
const _ = require("lodash");
//
const config = require("./data/SiteConfig");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.userName,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-widows`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          },
          `gatsby-remark-copy-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768
            }
          }
          // {
          //   resolve: `gatsby-remark-responsive-image`,
          //   options: {
          //     // It's important to specify the maxWidth (in pixels) of
          //     // the content container as this plugin uses this as the
          //     // base for generating different widths of each image.
          //     maxWidth: 768,
          //   },
          // },
        ]
      }
    },
    // `gatsby-plugin-accessibilityjs`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        query: require("./data/configQuery")
      }
    },
    "gatsby-plugin-react-next",
    `gatsby-plugin-lodash`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        icon: true,
        viewBox: false
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `Roboto`]
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLEANALYTICS_ID,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     id: process.env.HOTJAR_ID,
    //     sv: process.env.HOTJAR_SNIPPET_VERSION
    //   }
    // },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Renato Ricco | Portfolio",
        short_name: "renato ricco",
        start_url: "/",
        background_color: "#fff",
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/favicons/mstile-144x144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/favicons/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    "gatsby-plugin-offline",
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allPostsMarkdown } }) => {
    //           return allPostsMarkdown.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               description: edge.node.childMarkdownRemark.excerpt,
    //               url: site.siteMetadata.siteUrl + edge.node.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.slug
    //             });
    //           });
    //         },
    //         query: `
    //         {
    //           allPostsMarkdown(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [date] },
    //             filter: { isPublished: { ne: false } }
    //           ) {
    //             edges {
    //               node {
    //                 title
    //                 date
    //                 html
    //                   childMarkdownRemark{
    //                   excerpt
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: "/rss.xml"
    //       }
    //     ]
    //   }
    // }
  ]
};
