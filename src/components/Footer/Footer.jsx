import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Text, Link } from 'rebass/styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default class Footer extends Component {
	render() {
		return (
			<ContainerFooter className='footer'>
				<ContainerFlex mx='auto'>
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
							]}
							color='alternative'>
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

const ContainerFooter = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 8vh;
  padding: 15px;
  box-shadow: ${(props) => props.theme.shadows.down};
  z-index: 999;
  a,
  a:visited,
  a:active {
	transition: ${(props) => props.theme.transitions.fast};
    color: inherit;
    text-decoration: none;
  }
  a:hover {
	text-decoration: underline;
	color: ${(props) => props.theme.colors.secondaryColor}
  }
`;
const ContainerFlex = styled(Flex)`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
`;
const ContainerLink = styled(Link)`
  margin-right: 5px;
`;
