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
      id
      handle
      width
      height
    }
    category
    tags
    images {
      id
      handle
      width
      height
    }
  }
}

`;
