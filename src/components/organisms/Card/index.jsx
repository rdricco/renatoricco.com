import React, { Component } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import Link from "gatsby-link";
import {
  Box,
  Flex,
  Row,
  Divider,
  Truncate,
  Small,
  Heading,
  Text,
  Card,
  Banner,
  BackgroundImage
} from "rebass";
import PostTags from '../../Utils/PostTags/'


const CardContainer = styled(Card)`
  img {
    max-width: 100%;
  }

    background: white;
    box-shadow: 0px 0px 0px grey;
    -webkit-transition: box-shadow 0.5s ease-out;
    box-shadow: 0.8px 0.9px 3px grey;

  :hover {
    box-shadow: 1px 8px 20px grey;
    -webkit-transition: box-shadow 0.3s ease-in;
  }
`;

class Article extends React.Component {
    render() {
      return <Box w={[1, 1 / 2, 1 / 3]} mb={4} key={this.props.id}>
          <CardContainer m={1}>
          <Link to={this.props.slug} className="postURL">
            <BackgroundImage ratio={0.5} src={this.props.coverCard} >
            
            </BackgroundImage>
            
          </Link>
            <Box mx={2} my={2} className="blogPost" key={this.props.id}>
              <Row mx={0} mb={2} className="postTitle">
                <Text>
                  <Link to={this.props.slug} className="postURL">
                    {this.props.title}
                  </Link>
                </Text>
              </Row>

              <Row mx={0} mb={2} className="postDate">
                <Small>{this.props.date}</Small>
              </Row>

              <Row mx={0} mb={2} className="postTags">
                <PostTags tags={this.props.tags} bg={this.props.badgeBgColor} color={this.props.badgeColor} />
              </Row>
            </Box>
          </CardContainer>
        </Box>;
    }
}

export default Article;