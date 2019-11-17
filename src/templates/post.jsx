import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.css';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass/styled-components';

const ContainerBox = styled(Box)`
	max-width: 1300px;
	img{
		max-width: 100%;
	}
`;
const ContainerFlex = styled(Flex)`
justify-content: center;
`;
const ContainerTags = styled(Box)`
justify-content: center;
margin-bottom: 30px;
`;
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
					<ContainerBox>
						<h1>{post.title}</h1>
						<Text>{post.date}</Text>
						{post.tags.map(function(tag) {
							return <Text>{tag}</Text>;
						})}
						<div dangerouslySetInnerHTML={{ __html: postNode.html }} />
						<ContainerTags className='post-meta'>
							<PostTags tags={post.tags} />
						</ContainerTags>
					</ContainerBox>
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
