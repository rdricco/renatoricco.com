import React, { Component } from 'react';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import UserLinks from '../UserLinks/UserLinks';
import { Flex, Box, Text, Button } from 'rebass';

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Flex>
					<Box mr='auto' className='userLinks-container'>
						<UserLinks config={config} labeled />
					</Box>
					<Box ml='auto' className='notice-container'>
						<Text>Copyright 2019. renato ricco all rights reserved.</Text>
					</Box>
				</Flex>
			</footer>
		);
	}
}

export default Footer;
