import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass/styled-components';

const TagButton = styled(Button)`
  font-size: 11px;
  padding: 5px 10px ;
  color: white;
  background-color: black;
  transition: all .3s;
  :hover{
  color: black;
  background-color: white;
  cursor: pointer;
  }
`;
class PostTags extends Component {
	render() {
		const { tags } = this.props;
		return (
			<div className='post-tag-container'>
				{tags &&
					tags.map((tag) => (
						<Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
							<TagButton mr={1} mt={1} type='button'>
								{tag}
							</TagButton>
						</Link>
					))}
			</div>
		);
	}
}

export default PostTags;
