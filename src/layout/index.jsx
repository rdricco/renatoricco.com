import React from 'react';
import config from '../../data/SiteConfig';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { LayoutContainer, AppContainer, ContentContainer } from './index.styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { createGlobalStyle } from 'styled-components';
export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<ThemeProvider theme={dark}>
				<GlobalStyle />
				<LayoutContainer className='layout-container'>
					<Helmet>
						<meta name='description' content={config.siteDescription} />
						<html lang='en' />
					</Helmet>
					<AppContainer className='app-container'>
						<Header className='header-container' />
						<ContentContainer className='content-container'>{children}</ContentContainer>
						<Footer className='footer-container' />
					</AppContainer>
				</LayoutContainer>
			</ThemeProvider>
		);
	}
}

export const dark = {
	maincolor: 'black'
};

const light = {
	primaryColor: 'white',
	secondaryColor: 'black',
	accentColor: 'gray'
};

const GlobalStyle = createGlobalStyle`
body::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
}

body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    /* max-width: 100vw; */
}

body {
    overflow-y: scroll;
}
`;
