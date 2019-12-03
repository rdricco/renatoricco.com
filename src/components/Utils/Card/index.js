import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Card, Image } from 'rebass/styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default class PreviewCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<CardContainer
				px={1}
				m={1}
				width={[
					1,
					0.48,
					0.32,
					0.24
				]}
				key={this.props.title}>
				<AniLink cover direction='down' bg={this.props.transition} to={this.props.path}>
					<Image src={this.props.preview} />
				</AniLink>

				<TextContainer>
					<AniLink cover direction='down' bg={this.props.transition} to={this.props.path}>
						<Heading
							as='h2'
							fontSize={[
								2,
								2,
								3
							]}
							color='primary'>
							{this.props.title}
						</Heading>
					</AniLink>

					<Text>{this.props.date}</Text>
					<Flex>
						{this.props.tags.map(function(tag) {
							return <Tags>{tag}</Tags>;
						})}
					</Flex>
				</TextContainer>
			</CardContainer>
		);
	}
}

PreviewCard.defaultProps = {
	transition: 'rebeccapurple',
	title: 'Project Title',
	preview: '/assets/preview.png'
};

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
const CardContainer = styled(Card)`
  padding: 0px;
  box-shadow: grey 0.8px 0.9px 3px;
  background-color: ${(props) => props.theme.colors.maincolor};
  transition: ${(props) => props.theme.transitions.fast};
  border-radius: 4px;
  :hover {
    box-shadow: grey 1px 8px 20px;
    ${(props) => props.theme.transitions.fast} /* transform: translateY(-1px); */
  }
  a,
  a:visited,
  a:active,
  a:hover {
    color: inherit;
    text-decoration-color: none;
    text-decoration: none;
  }
`;
const TextContainer = styled(Box)`
  padding: 10px;
`;
