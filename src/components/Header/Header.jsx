import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Heading, Text, Button } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { TiHome } from 'react-icons/ti';

const TopNavigation = styled(Box)`
  display: flex;
  max-width: 100%;
  min-height: 7vh;
  padding: 0px 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: ${(props) => props.theme.transitions.default};
  box-shadow: ${(props) => props.theme.shadows.upper};
  background-color: ${(props) => props.theme.colors.maincolor};
  z-index: ${(props) => props.theme.zIndex.top};
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
    transition: ${(props) => props.theme.transitions.fast};
  }
  a:hover {
	color: ${(props) => props.theme.colors.secondaryColor}
  }
`;

const ContainerBox = styled(Box)`
  margin: auto;
  width: 100%;
`;
const LinkBox = styled(Flex)`
  align-items: center;
`;
const ContainerFlex = styled(Flex)`
  max-width: 1300px;
  margin-left: auto;
`;

export default class Header extends Component {
	render() {
		return (
			<Headroom>
				<TopNavigation className='HeaderWrapper'>
					<ContainerBox>
						<ContainerFlex mx='auto'>
							<Box mr='auto' className='userLinks-container'>
								<AniLink direction='left' cover bg='#FFFFFF' to='/'>
									<TiHome size={this.props.iconSize} />
								</AniLink>
							</Box>
							<LinkBox ml='auto' className='notice-container'>
								{/* <Link to='/works/'>
								</Link> */}
								<AniLink cover bg='#F2C94C' to='works'>
									<Text fontSize={this.props.textSize}>Works</Text>
								</AniLink>
							</LinkBox>
						</ContainerFlex>
					</ContainerBox>
				</TopNavigation>
			</Headroom>
		);
	}
}

Header.propTypes = {
	textSize: PropTypes.string,
	iconSize: PropTypes.string
};

Header.defaultProps = {
	textSize: '2',
	iconSize: '30px'
};
