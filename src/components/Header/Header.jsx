import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ContainerBox = styled(Box)`
	/* max-width: 1180px; */
	min-height: 65px;

`;
const ContainerFlex = styled(Flex)`
	max-width: 1300px;
	margin-left: auto;
`;

const Header = (props) => (
	<header className='HeaderWrapper'>
		<ContainerBox>
			<ContainerFlex mx='auto'>
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
			</ContainerFlex>
		</ContainerBox>
	</header>
);

Header.propTypes = {
	// bla: PropTypes.string,
};

Header.defaultProps = {
	// bla: 'test',
};

export default Header;
