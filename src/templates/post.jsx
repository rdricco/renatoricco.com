import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
import { FadeIn } from "animate-components";
import Article from "../components/organisms/Article";
import PostTags from "../components/Utils/PostTags";
import {
  Container,
  Box,
  Banner,
} from "rebass";
export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.projectsMarkdown;
    const post = postNode;
    const author = post.author;
    const coverPost = post.coverImage.handle;

    return <Box key={post.id} pb={6}>
        <FadeIn>
          <Helmet title={`${post.title} | ${config.siteTitle}`} />

          {/* <Banner bg="grey" backgroundImage={`https://media.graphcms.com/resize=w:1900,h:646,fit:clip/quality=v:75/compress/${coverPost}`} /> */}

          <Container pt={4}>
            <Article slug={post.slug} title={post.title} date={post.date} tags={post.tags} html={post.childMarkdownRemark.html} badgeColor={rebassTheme.colors.secondaryLightest} badgeBgColor={rebassTheme.colors.yellow} />
          </Container>
        </FadeIn>
      </Box>;
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
         query BlogPostBySlug($slug: String!) {
           projectsMarkdown(slug: { eq: $slug }) {
             id
             title
             date(formatString: "YYYY")
             category
             tags
             html
             childMarkdownRemark {
               html
             }
             coverImage {
               id
               handle
               width
               height
             }
             slug
           }
         }
       `;
