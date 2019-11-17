import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Heading, Text, Card, Image } from 'rebass';

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
			<Flex flexWrap='wrap' px={2}>
				{/* Your post list here. */
				postList.map((post) => (
					<Link to={post.path} key={post.title}>
						<Card px={1} width={1}>
							<Image src={post.preview} />
							<Heading>{post.title}</Heading>
						</Card>
					</Link>
				))}
			</Flex>
		);
	}
}

export default PostListing;
