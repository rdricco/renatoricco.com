import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Text, Link } from 'rebass/styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default class Footer extends Component {
	render() {
		return (
			<ContainerFooter width={1} p={'15px'} className='footer'>
				<ContainerFlex mx='auto' w={1}>
					<Box mr='auto' className='userLinks-container'>
						<ContainerLink href='https://www.linkedin.com/in/renatoricco/'>
							<FaLinkedin size={this.props.iconSize} />
						</ContainerLink>
						<ContainerLink href='https://github.com/rdricco'>
							<FaGithub size={this.props.iconSize} />
						</ContainerLink>
					</Box>
					<Box ml='auto' className='notice-container'>
						<Text
							fontSize={[
								1,
								2
							]}>
							{this.props.copyrightText}
						</Text>
					</Box>
				</ContainerFlex>
			</ContainerFooter>
		);
	}
}

Footer.propTypes = {
	copyrightText: PropTypes.string,
	iconSize: PropTypes.string
};

Footer.defaultProps = {
	copyrightText: 'Copyright 2019. renato ricco all rights reserved.',
	iconSize: '22px'
};

const ContainerFooter = styled(Flex)`
  align-items: center;
  min-height: 9vh;
  background-color: ${(props) => props.theme.colors.maincolor};
  box-shadow: ${(props) => props.theme.shadows.down};
  z-index: ${(props) => props.theme.zIndex.top};
  a,
  a:visited,
  a:active {
	transition: ${(props) => props.theme.transitions.fast};
    color: inherit;
    text-decoration: none;
  }
  a:hover {
	color: ${(props) => props.theme.colors.secondaryColor}
  }
`;
const ContainerFlex = styled(Flex)`
  width: 100%;
  max-width: 1300px;
	@media (max-width: 600px) {
	flex-direction: column;
	justify-content: center;
	.userLinks-container,
	.notice-container{
		justify-content: center;
		width: 100%;
		display: flex;
	}
	}
`;
const ContainerLink = styled(Link)`
  margin-right: 5px;
`;
