import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Button } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import { TiHome } from 'react-icons/ti';

const TopNavigation = styled(Box)`
  padding: 0px 15px;
  display: flex;
  z-index: 999;
  background-color: white;
  max-width: 100%;
  min-height: 7vh;
  transition: all 0.5s ease-in;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.32);
  padding-top: 10px;
  padding-bottom: 10px;
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContainerBox = styled(Box)`
  transition: all 0.5s ease-in;
  margin: auto;
  width: 100%;
`;
const LinkBox = styled(Box)`
  transition: all 0.5s ease-in;
  display: flex;
  align-items: center;
`;
const ContainerFlex = styled(Flex)`
  transition: all 0.5s ease-in;
  max-width: 1300px;
  margin-left: auto;
`;

const Header = (props) => (
	<Headroom>
		<TopNavigation className='HeaderWrapper'>
			<ContainerBox>
				<ContainerFlex mx='auto'>
					<Box mr='auto' className='userLinks-container'>
						<Link to='/'>
							<TiHome size='30px' />
						</Link>
					</Box>
					<LinkBox ml='auto' className='notice-container'>
						<Link to='/works/'>
							<Text fontSize={2}>Works</Text>
						</Link>
					</LinkBox>
				</ContainerFlex>
			</ContainerBox>
		</TopNavigation>
	</Headroom>
);

Header.propTypes = {
	// bla: PropTypes.string,
};

Header.defaultProps = {
	// bla: 'test',
};

export default Header;
