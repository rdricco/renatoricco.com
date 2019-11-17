import React from 'react';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

import config from '../../data/SiteConfig';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.css';

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		const LayoutContainer = styled(Box)`
		height: 100%;
    	width: 100%;
		padding: 5px;
   		 `;
		const AppContainer = styled(Box)`
		min-height: 100%;
		a,
		a:visited,
		a:active {
			color: inherit;
			text-decoration-color: yellow;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
			text-decoration-color: yellow;
		}
		div,
		button {
			font-family: "Anonymous Pro";
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: "Poppins";
		}

		`;
		const ContentContainer = styled(Box)`
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%; 
        display: flex;
        flex-direction: column;
		background-color: rgb(245, 242, 237);

   		 `;

		return (
			<LayoutContainer className='layout-container'>
				<Helmet>
					<meta name='description' content={config.siteDescription} />
					<html lang='en' />
				</Helmet>
				<AppContainer>
					<Header />
					<ContentContainer>{children}</ContentContainer>
					<Footer />
				</AppContainer>
			</LayoutContainer>
		);
	}
}
