import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import styled from 'styled-components';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass';

class IndexPage extends Component {
	render() {
		return (
			<Layout>
				<div className='about-container'>
					<Helmet title={`Home | ${config.siteTitle}`} />
					<Heading as='h1'>Hi, my name is renato ricco.</Heading>
					<Text as='h3'> I'm a Creative Coder.</Text>
					<Text>
						I was born in São Paulo, where I currently live. Do you have a project we can work together?
						Nice, feel free to contact me.
					</Text>
				</div>
			</Layout>
		);
	}
}

export default IndexPage;
