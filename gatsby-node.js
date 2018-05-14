const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const slugify = require("lodash-addons"); 
const path = require("path");

const worksTemplate = path.resolve("src/templates/works.jsx");
const blogPostTemplate = path.resolve("src/templates/post.jsx");
const tagTemplate = path.resolve("src/templates/tags.jsx");


exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Posts here is the node you'd like to create markdown for use on remark plugins
  if (node.internal.type === `Portfolios`) {
    createNode({
      id: `md-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: `${node.internal.type}Markdown`,
        mediaType: `text/markdown`,
        content: node.content,
        contentDigest: node.internal.contentDigest
      },
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      isPublished: node.isPublished,
      title: node.title,
      slug: node.slug,
      date: node.date,
      description: node.description,
      html: node.content,
      content: node.content,
      tags: node.tags,
      category: node.category,
      coverImage: node.coverImage,
      images: node.images,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allPortfoliosMarkdown(
          sort: { fields: [date], order: DESC }
          filter: { isPublished: { ne: false } }
          ) {
          edges {
            node {
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
              childMarkdownRemark{
                html
                excerpt
              }
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
            console.log(result.errors);
            return Promise.reject(result.errors);
        }
        const posts = result.data.posts.edges;
        posts.forEach(({ node }) => {
          createPage({
            // path: _.slugify(node.slug),
            path: node.slug,
            component: blogPostTemplate,
            context: {
              slug: node.slug
            }
          });
        });

        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: worksTemplate,
          pageLength: 100,
          pathPrefix: "works",
        });



        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.tags")) {
            tags = tags.concat(edge.node.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });
        resolve();
      });
  });
};
