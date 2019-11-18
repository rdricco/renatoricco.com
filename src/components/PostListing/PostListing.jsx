import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  Flex,
  Box,
  Heading,
  Text,
  Card,
  Image
} from "rebass/styled-components";
import PostTags from "../PostTags/PostTags";

const BoxContainer = styled(Box)`
  max-width: 1300px;
  h1 {
    margin: 50px 0 20px 0;
  }
`;
const Tags = styled(Text)`
margin-right:.5em;
margin-left:0;
text-decoration: none;
  font-size: 11px;
  padding: 5px 10px ;
  color: white;
  background-color: black;
  transition: all .3s;
  border-radius: 4px;
  :hover{
  color: black;
  background-color: yellow;
  cursor: pointer;
`;
const FlexContainer = styled(Flex)`
  margin: 0;
  padding: 0px;
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
  background: white;
  transition: box-shadow 0.5s ease-out 0s;
  border-radius: 4px;
  :hover {
    box-shadow: grey 1px 8px 20px;
    transition: all 0.3s ease-in 0s;
    transform: translateY(-1px);
  }
`;
const TextContainer = styled(Box)`
  padding: 10px;
`;

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
        <Heading as='h1' fontSize={[3, 4, 5]} color='primary'>
          Featured Works
        </Heading>
        <FlexContainer flexWrap='wrap' px={2} mx={0}>
          {/* Your post list here. */
          postList.map(post => (
            <CardContainer
              px={1}
              width={[1, 1 / 2, 1 / 3, 1 / 4]}
              key={post.title}>
              <Link to={post.path}>
                <Image src={post.preview} />
              </Link>
              <TextContainer>
                <Link to={post.path}>
                  <Heading as='h2' fontSize={[2, 2, 3]} color='primary'>
                    {post.title}
                  </Heading>
                </Link>
                <Text>{post.date}</Text>
                <Flex>
                  {post.tags.map(function(tag) {
                    return <Tags>{tag}</Tags>;
                  })}
                </Flex>
              </TextContainer>
            </CardContainer>
          ))}
        </FlexContainer>
      </BoxContainer>
    );
  }
}
