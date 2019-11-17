import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Link } from 'rebass';

const MainContainer = styled(Flex)`
	max-width: 1300px;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
	min-height:80vh;
`;
const BoxContainer = styled(Box)`
	max-width: 1180px;
	margin-left: auto;
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
							color='primary'>
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
								3,
								4,
								5
							]}
							color='primary'>
							I was born in São Paulo, where I currently live. <br />
							Do you have a project we can work together? Nice, feel free to
							<Link href='mailto:contact@renatoricco.com'>contact me.</Link>
						</Text>
					</BoxContainer>
				</MainContainer>
			</Layout>
		);
	}
}

export default IndexPage;
