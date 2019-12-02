import React from "react";
import styled from "styled-components";
import { Flex } from "rebass/styled-components";
import Card from "../Card";

export default class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
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
        postList.map(post => (
          <Card
            title={post.title}
            path={post.path}
            preview={post.preview}
            date={post.date}
            tags={post.tags}
            transition={post.transition}
          />
        ))}
      </CardsContainer>
    );
  }
}

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
