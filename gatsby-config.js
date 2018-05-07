module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Renato Ricco',
    description: 'Graphic Designer & Front End Developer',
    keywords: 'html, css, portfolio, personal website, reactjs',
    url: 'https://renatoricco.com'
  }
};
