import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';

import config from '../../data/SiteConfig';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Link } from 'rebass/styled-components';

const MainContainer = styled(Flex)`
	color: ${(props) => props.theme.colors.maincolor};
	background: ${(props) => props.theme.colors.gradientBg};
	width: 100%;
	min-height: 84vh;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	padding: 0px 15px;
`;
const BoxContainer = styled(Box)`
  max-width: 1180px;
  width: 100%;
  a,
p,
li,
div,
button {
font-family: ${(props) => props.theme.fonts.body}
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-family: ${(props) => props.theme.fonts.heading}
}
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
						<Heading
							as='h1'
							fontSize={[
								5,
								6,
								7
							]}
							color='main'>
							Hi, my name is renato ricco.
						</Heading>
						<Text
							as='h3'
							fontSize={[
								4,
								5,
								6
							]}
							color='primary'>
							I'm a Creative Coder.
						</Text>
						<Text
							fontSize={[
								2,
								3,
								4
							]}
							color='primary'>
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
