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
        coverImage {
          id
          handle
          width
          height
        }
        images {
          id
          handle
          width
          height
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
}


`;
