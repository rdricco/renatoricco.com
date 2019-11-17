import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Card, Image } from 'rebass/styled-components';

const BoxContainer = styled(Box)`
max-width:1300px;
background-color: pink;
`;
const Tags = styled(Text)`
margin-right:.5em;
text-decoration: none;
`;
const FlexContainer = styled(Flex)`
background-color: green;
img{
	max-width: 100%;
}
`;

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
			<BoxContainer>
				<Heading
					as='h1'
					fontSize={[
						3,
						4,
						5
					]}
					color='primary'>
					Featured Works
				</Heading>
				<FlexContainer flexWrap='wrap' px={2}>
					{/* Your post list here. */
					postList.map((post) => (
						<Card px={1} width={1 / 3} key={post.title}>
							<Link to={post.path}>
								<Image src={post.preview} />
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
								<Text>{post.date}</Text>
								<Flex>
									{post.tags.map(function(tag) {
										return <Tags>{tag}</Tags>;
									})}
								</Flex>
							</Link>
						</Card>
					))}
				</FlexContainer>
			</BoxContainer>
		);
	}
}
