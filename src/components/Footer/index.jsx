import React, { Component } from 'react';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import UserLinks from '../UserLinks/UserLinks';
import { Flex, Box, Text, Button } from 'rebass';
import styled from 'styled-components';

const ContainerFooter = styled(Box)`
	/* max-width: 1180px; */
min-height: 65px;
`;
const ContainerFlex = styled(Flex)`
	max-width: 1300px;
	margin-left: auto;
`;
class Footer extends Component {
	render() {
		return (
			<ContainerFooter className='footer'>
				<ContainerFlex mx='auto'>
					<Box mr='auto' className='userLinks-container'>
						<UserLinks config={config} labeled />
					</Box>
					<Box ml='auto' className='notice-container'>
						<Text>Copyright 2019. renato ricco all rights reserved.</Text>
					</Box>
				</ContainerFlex>
			</ContainerFooter>
		);
	}
}

export default Footer;
