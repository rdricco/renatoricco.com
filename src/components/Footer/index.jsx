import React, { Component } from 'react';
import config from '../../../data/SiteConfig';
import styled from 'styled-components';
import { Flex, Box, Text, Link } from 'rebass/styled-components';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContainerFooter = styled(Box)`
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
  padding-bottom: 15px;
`;
const ContainerFlex = styled(Flex)`
	max-width: 1300px;
	margin-left: auto;
`;
export default class Footer extends Component {
	render() {
		return (
			<ContainerFooter className='footer'>
				<ContainerFlex mx='auto'>
					<Box mr='auto' className='userLinks-container'>
						<Link>
							<TiSocialFacebook />
						</Link>
						<Link>
							<FaLinkedin />
						</Link>
						<Link>
							<FaGithub />
						</Link>
					</Box>
					<Box ml='auto' className='notice-container'>
						<Text>Copyright 2019. renato ricco all rights reserved.</Text>
					</Box>
				</ContainerFlex>
			</ContainerFooter>
		);
	}
}
