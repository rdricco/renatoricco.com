import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box, Text, Link } from 'rebass/styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default class Footer extends Component {
	render() {
		console.log('theme ', this.props.theme);
		console.log('opa');
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
  padding: 0px 15px;
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  min-height: 8vh;
  box-shadow: 0px -3px 15px 0px rgba(0, 0, 0, 0.32);
  padding-top: 15px;
	z-index: 999;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  align-items: center;
`;
const ContainerFlex = styled(Flex)`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
`;
const ContainerLink = styled(Link)`
  margin-right: 5px;
`;
