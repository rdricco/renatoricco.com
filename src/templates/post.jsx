import React from 'react';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby';

import Layout from '../layout';

import PostTags from '../components/Utils/PostTags/PostTags';
import SEO from '../components/Utils/SEO/SEO';

import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';

import styled from 'styled-components';
import { Flex, Box, Heading, Text } from 'rebass/styled-components';

export default class PostTemplate extends React.Component {
	render() {
		const { data, pageContext } = this.props;
		const { slug } = pageContext;
		const postNode = data.markdownRemark;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}
		if (!post.category_id) {
			post.category_id = config.postDefaultCategoryID;
		}
		return (
			<Layout>
				<ContainerFlex>
					<Helmet>
						<title>{`${post.title} | ${config.siteTitle}`}</title>
					</Helmet>
					<SEO postPath={slug} postNode={postNode} postSEO />
					<ContentContainer>
						<Heading>{post.title}</Heading>
						<Text>{post.date}</Text>
						<ContainerTags className='post-meta'>
							<PostTags tags={post.tags} />
						</ContainerTags>
						<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
					</ContentContainer>
				</ContainerFlex>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			excerpt
			frontmatter {
				title
				cover
				date(formatString: "MM/YYYY")
				category
				tags
			}
			fields {
				slug
				date(formatString: "MM/YYYY")
			}
		}
	}
`;

const ContentContainer = styled(Box)`
  min-height: 70vh;
  max-width: 1300px;
  padding: 50px 0px 20px 0px;
  img {
    max-width: 100%;
    box-shadow: grey 0.8px 0.9px 3px;
    margin-bottom: 20px; 
  }
  @media (max-width: 1300px) {
    padding: 10px;
  }
`;
const ContainerFlex = styled(Flex)`
  justify-content: center;
`;
const ContainerTags = styled(Box)`
  justify-content: center;
  margin-bottom: 15px;
`;
