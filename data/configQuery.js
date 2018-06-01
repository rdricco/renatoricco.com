module.exports = `
{
  allPortfolios {
    id
    isPublished
    title
    description
    content
    slug
    date
    coverImage {
      altText
      caption
      id
      mimeType
      fileName
      height
      width
      url
      handle
      size
    }
    bannerImage {
      altText
      caption
      id
      mimeType
      fileName
      height
      width
      url
      handle
      size
    }
    category
    tags
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
  }
}

`;
