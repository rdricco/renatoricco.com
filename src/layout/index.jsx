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
		const AppContainer = styled(Box)`
      min-height: 100vh;
      `;
		const ContentContainer = styled(Box)`
        min-width: 100%;
        max-width: 100vw;
        min-height: 100%;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        background-color: lightgray;
    `;

		return (
			<div className='layout-container'>
				<Helmet>
					<meta name='description' content={config.siteDescription} />
					<html lang='en' />
				</Helmet>
				<AppContainer>
					<Header />
					<ContentContainer>{children}</ContentContainer>
					<Footer />
				</AppContainer>
			</div>
		);
	}
}
