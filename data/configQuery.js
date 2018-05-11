module.exports = `
{
  allAuthors {
    id
    isPublished
    name
    mainAuthor
    biography
    tagline
    mainAuthor
    avatar {
      handle
    }
  }
  allProjects {
    id
    isPublished
    title
    description
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
  allExperiences {
    id
    isPublished
    employerName
    employerLogo {
      id
      handle
      width
      height
    }
    jobTitle
    jobDescription
    startDate
    endDate
  }
}

`;
