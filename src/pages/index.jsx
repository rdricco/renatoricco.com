import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import styled from "styled-components";
import { Flex, Box, Heading, Text, Link } from "rebass/styled-components";
import ThemeProvider from "styled-components";

const MainContainer = styled(Flex)`
  color: white;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 84vh;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(to right, rgb(242, 153, 74), rgb(242, 201, 76));
  padding: 0px 15px;
`;
const BoxContainer = styled(Box)`
  max-width: 1180px;
  width: 100%;
  /* margin-left: auto; */
  a {
    margin-left: 0.5em;
  }
`;
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <MainContainer className='about-container'>
          <Helmet title={`Home | ${config.siteTitle}`} />
          <BoxContainer>
            <Heading as='h1' fontSize={[5, 6, 7]} color='primary'>
              Hi, my name is renato ricco.
            </Heading>
            <Text as='h3' fontSize={[4, 5, 6]} color='primary'>
              I'm a Creative Coder.
            </Text>
            <Text fontSize={[2, 3, 4]} color='primary'>
              I was born in São Paulo, where I currently live. <br />
              Do you have a project we can work together? <br />
              Nice, feel free to
              <Link href='mailto:contact@renatoricco.com'>contact me</Link>.
            </Text>
          </BoxContainer>
        </MainContainer>
      </Layout>
    );
  }
}

export default IndexPage;
