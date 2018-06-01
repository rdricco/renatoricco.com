module.exports = `
{
  allPortfoliosMarkdown {
    edges{
      node{
        id
        html
        content
        description
        title
        slug
        tags
        category
        date(formatString: "YYYY")
        isPublished
        bannerImage {
          altText
          caption
          order
          id
          mimeType
          fileName
          height
          width
          url
          handle
          size
        }
        coverImage {
          altText
          caption
          order
          id
          mimeType
          fileName
          height
          width
          url
          handle
          size
        }
        images {
          altText
          caption
          order
          id
          mimeType
          fileName
          height
          width
          url
          handle
          size
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
}


`;
