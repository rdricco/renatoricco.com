import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
// import { FadeIn } from "animate-components";
import Article from "../components/organisms/Article";
// import PostTags from "../components/Utils/PostTags";
import { Container, Box, Banner } from "rebass";
import styled from "styled-components";
import GraphImg from "graphcms-image";
import _ from "lodash";
import PageTransition from "gatsby-plugin-page-transitions";


const GraphImage = styled(GraphImg)`
  max-width: 100%;
  min-width: 100%;
  box-shadow: 0.8px 0.9px 3px grey;
  margin-top: 30px;
`;

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.portfoliosMarkdown;
    const post = postNode;
    // const author = post.author;
    // const BannerImage = post.bannerImage.handle;
    const images = _.sortBy(post.images, [
      function(o) {
        return o.fileName;
      }
    ]);
    return (
      <PageTransition
        defaultStyle={{
          transition: "left 450ms cubic-bezier(0.47, 0, 0.75, 0.72)",
          left: "100%",
          position: "relative",
          width: "100%",
          height: "100%"
        }}
        transitionStyles={{
          entering: { left: "0%" },
          entered: { left: "0%" },
          exiting: { left: "100%" }
        }}
        transitionTime={500}
      >
        <Box key={post.id} pb={6}>
          {/* <FadeIn> */}
            <Helmet title={`${post.title} | ${config.siteTitle}`} />

            {/* <Banner bg="grey" backgroundImage={`https://media.graphcms.com/resize=w:1900,h:646,fit:clip/quality=v:75/compress/${BannerImage}`} /> */}

            <Container pt={4}>
              <Article
                slug={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
                description={post.description}
                html={post.childMarkdownRemark.html}
                badgeColor={rebassTheme.colors.secondaryLightest}
                badgeBgColor={rebassTheme.colors.black}
              />

              {images.map(image => (
                <Box pb={100}>
                  <GraphImage
                    image={image}
                    alt={image.altText}
                    title={image.caption}
                    withWebp={true}
                    maxWidth={1200}
                    fit={"crop"}
                  />
                </Box>
              ))}
            </Container>
          {/* </FadeIn> */}
        </Box>
      </PageTransition>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    portfoliosMarkdown(slug: { eq: $slug }) {
      id
      title
      date(formatString: "YYYY")
      category
      tags
      description
      content
      html
      childMarkdownRemark {
        html
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
      slug
    }
  }
`;
