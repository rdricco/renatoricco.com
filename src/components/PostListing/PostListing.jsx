import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Card, Image } from 'rebass';

const BoxContainer = styled(Box)`
max-width:1300px;
background-color: pink;
img{
	max-width: 640px;
}
`;
const FlexContainer = styled(Flex)`
width:100%;
background-color: gray;
img{
	max-width: 640px;
}
`;

class PostListing extends React.Component {
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
					<Flex flexWrap='wrap' px={2}>
						{/* Your post list here. */
						postList.map((post) => (
							<Link to={post.path} key={post.title}>
								<Card px={1} width={1 / 3}>
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
									{post.tags.map(function(tag) {
										return <Text>{tag}</Text>;
									})}
								</Card>
							</Link>
						))}
					</Flex>
				</BoxContainer>
			</BoxContainer>
		);
	}
}

export default PostListing;
