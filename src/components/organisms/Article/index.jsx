import React, { Component } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";
import Link from "gatsby-link";
import { Box, Row, Divider, Truncate, Small, Heading, Text } from "rebass";
import PostTags from '../../Utils/PostTags/'


const BoxContent = styled(Box)`
  img {
    max-width: 100%;
  }
`;

class Article extends React.Component {
    render() {
        return <Box key={this.props.id}>
            <Box mb={2} mt={4} className="blogPost" key={this.props.id}>
              <Row mx={0} mb={2} className="postTitle">
                <Heading>
                  <Link to={this.props.slug} className="postURL">
                    {this.props.title}
                  </Link>
                </Heading>
              </Row>
              
              <Row mx={0} mb={2} className="postTags">
                <PostTags tags={this.props.tags} bg={this.props.badgeBgColor} color={this.props.badgeColor} />
              </Row>

              <Row mx={0} mb={2} className="postDate">
                <Small>{this.props.date}</Small>
              </Row>
              
            </Box>

              <BoxContent mx={0} className="postContent">
                {this.props.html != null ? <div dangerouslySetInnerHTML={{ __html: this.props.html }} /> : null}

                {this.props.excerpt != null ? <Box mb={4}>
                    <Text mb={2}>{this.props.excerpt}</Text>

                    <Small>
                      <Link to={this.props.slug} className="postURL">
                        Read More
                      </Link>
                    </Small>
                  </Box> : null}
              </BoxContent>

          </Box>;
    }
}

export default Article;