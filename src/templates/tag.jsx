import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";

import styled from "styled-components";
import { Flex, Box, Heading } from "rebass/styled-components";

import PostListing from "../components/Utils/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className='tag-container'>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <ContentContainer>
            <Box flexWrap='wrap' px={2} mx={0}>
              <Heading as='h1' fontSize={[3, 4, 5]}>
                Works tagged as "{tag}"
              </Heading>
            </Box>
            <PostListing postEdges={postEdges} />
          </ContentContainer>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
	query TagPage($tag: String) {
		allMarkdownRemark(
			limit: 1000
			sort: { fields: [fields___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					timeToRead
					frontmatter {
						title
						date
						preview
						cover
						tags
						category
						transition
				}
			}
		}
	}
`;

const ContentContainer = styled(Box)`
  width: 100%;
  max-width: 1300px;
  min-height: 83vh;
  margin: auto;
  padding: 10px;
  h1 {
    margin: 50px 0 20px 0;
  }
  @media (max-width: 600px) {
    .userLinks-container,
    .notice-container {
      padding: 20px;
    }
  }
`;
