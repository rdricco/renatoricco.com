import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass';
//import { Test } from './Header.styles';
import { Link } from 'gatsby';

const Header = (props) => (
	<header className='HeaderWrapper'>
		<Flex>
			<Box mr='auto' className='userLinks-container'>
				<Link to='/'>
					<button type='button'>Home</button>
				</Link>
			</Box>
			<Box ml='auto' className='notice-container'>
				<Link to='/works/'>
					<button type='button'>Works</button>
				</Link>
			</Box>
		</Flex>
	</header>
);

Header.propTypes = {
	// bla: PropTypes.string,
};

Header.defaultProps = {
	// bla: 'test',
};

export default Header;
