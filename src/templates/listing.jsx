import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import styled from 'styled-components';
import { Flex, Box, Heading } from 'rebass/styled-components';
import PostListing from '../components/Utils/PostListing/PostListing';
import SEO from '../components/Utils/SEO/SEO';
import config from '../../data/SiteConfig';

export default class Listing extends React.Component {
	renderPaging() {
		const { currentPageNum, pageCount } = this.props.pageContext;
		const prevPage = currentPageNum - 1 === 1 ? '/works/' : `/works/${currentPageNum - 1}/`;
		const nextPage = `/works/${currentPageNum + 1}/`;
		const isFirstPage = currentPageNum === 1;
		const isLastPage = currentPageNum === pageCount;

		return (
			<div className='paging-container'>
				{!isFirstPage && <Link to={prevPage}>Anterior</Link>}
				{[
					...Array(pageCount)
				].map((_val, index) => {
					const pageNum = index + 1;
					return (
						<Link key={`listing-page-${pageNum}`} to={pageNum === 1 ? '/works/' : `/works/${pageNum}/`}>
							{pageNum}
						</Link>
					);
				})}
				{!isLastPage && <Link to={nextPage}>Próximos</Link>}
			</div>
		);
	}

	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;

		return (
			<Layout>
				<div className='listing-container'>
					<div className='posts-container'>
						<Helmet title={config.siteTitle} />
						<SEO />
						<ContentContainer>
							<Box flexWrap='wrap' px={2} mx={0}>
								<Heading
									as='h1'
									fontSize={[
										3,
										4,
										5
									]}>
									Featured Works
								</Heading>
							</Box>
							<PostListing postEdges={postEdges} />
						</ContentContainer>
					</div>
					{this.renderPaging()}
				</div>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const listingQuery = graphql`
	query ListingQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(sort: { fields: [fields___date], order: DESC }, limit: $limit, skip: $skip) {
			edges {
				node {
					fields {
						slug
						date(formatString: "MM/YYYY")
					}
					excerpt
					timeToRead
					frontmatter {
						title
						tags
						cover
						preview
						date
					}
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
	padding:10px;
  	h1 {
	    margin: 50px 0 20px 0;
  	}
  	@media (max-width: 600px) {
		.userLinks-container,
		.notice-container{
			padding: 20px;
		}
	}
`;
