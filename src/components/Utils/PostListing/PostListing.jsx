import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Card, Image } from 'rebass/styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import PostTags from '../PostTags/PostTags';

export default class PostListing extends React.Component {
	getPostList() {
		const postList = [];
		this.props.postEdges.forEach((postEdge) => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				preview: postEdge.node.frontmatter.preview,
				title: postEdge.node.frontmatter.title,
				transition: postEdge.node.frontmatter.transition,
				date: postEdge.node.fields.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			});
		});
		return postList;
	}

	render() {
		const postList = this.getPostList();
		return (
			<CardsContainer className='Cards-Container' flexWrap='wrap' px={2} mx={0}>
				{/* Your post list here. */
				postList.map((post) => (
					<CardContainer
						px={1}
						m={1}
						width={[
							1,
							0.48,
							0.32,
							0.24
						]}
						key={post.title}>
						<AniLink cover bg={post.transition} to={post.path}>
							<Image src={post.preview} />
						</AniLink>

						<TextContainer>
							<AniLink cover bg='rebeccapurple' to={post.path}>
								<Heading
									as='h2'
									fontSize={[
										2,
										2,
										3
									]}
									color='primary'>
									{post.title}
								</Heading>
							</AniLink>

							<Text>{post.date}</Text>
							<Flex>
								{post.tags.map(function(tag) {
									return <Tags>{tag}</Tags>;
								})}
							</Flex>
						</TextContainer>
					</CardContainer>
				))}
			</CardsContainer>
		);
	}
}

const ContentContainer = styled(Flex)`
flex-direction: column;
justify-content: center;
  max-width: 1300px;
  width: 100%;
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
const Tags = styled(Text)`
	margin-left:0;
	margin-right:.5em;
	padding: 5px 10px ;
	font-size: 11px;
	text-decoration: none;
	color: ${(props) => props.theme.colors.maincolor};
	background-color: ${(props) => props.theme.colors.black};;
	transition: ${(props) => props.theme.transitions.fast};
	border-radius: 4px;
	:hover{
	color: ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.secondaryColor};
	cursor: pointer;
`;
const CardsContainer = styled(Flex)`
  a,
  a:visited,
  a:active,
  a:hover {
    color: inherit;
    text-decoration-color: none;
    text-decoration: none;
  }
`;

const CardContainer = styled(Card)`
	padding: 0px;
	box-shadow: grey 0.8px 0.9px 3px;
	background-color: ${(props) => props.theme.colors.maincolor};
	transition: ${(props) => props.theme.transitions.fast};
	border-radius: 4px;
	:hover {
		box-shadow: grey 1px 8px 20px;
		${(props) => props.theme.transitions.fast}
		/* transform: translateY(-1px); */
  	}
`;
const TextContainer = styled(Box)`
  padding: 10px;
`;
