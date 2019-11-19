import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import styled from "styled-components";
import { Flex, Box, Text, Link } from "rebass/styled-components";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
export default class Footer extends Component {
  render() {
    return (
      <ContainerFooter className='footer'>
        <ContainerFlex mx='auto'>
          <Box mr='auto' className='userLinks-container'>
            <ContainerLink href='https://www.linkedin.com/in/renatoricco/'>
              <FaLinkedin size='22px' />
            </ContainerLink>
            <ContainerLink href='https://github.com/rdricco'>
              <FaGithub size='22px' />
            </ContainerLink>
          </Box>
          <Box ml='auto' className='notice-container'>
            <Text fontSize={[1, 2]} color='alternative'>
              Copyright 2019. renato ricco all rights reserved.
            </Text>
          </Box>
        </ContainerFlex>
      </ContainerFooter>
    );
  }
}
