import React from 'react';
import config from '../../data/SiteConfig';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../data/theme';
import { Flex, Box } from 'rebass/styled-components';

import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import preset from '@rebass/preset';

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		console.log(theme.colors);
		return (
			<ThemeProvider theme={theme}>
				<Box className='layout-container'>
					<GlobalStyle />
					<Helmet>
						<meta name='description' content={config.siteDescription} />
						<html lang='en' />
					</Helmet>
					<Box className='app-shell'>
						<Header className='header-container' />
						<ContentContainer className='content-container'>{children}</ContentContainer>
						<Footer className='footer-container' />
					</Box>
				</Box>
			</ThemeProvider>
		);
	}
}

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
	overflow-y: scroll;
  }
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

a,
p,
li,
div,
button {
font-family: ${theme.fonts.body};
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-family: ${theme.fonts.heading};
}
a,
a:visited,
a:active {
color: inherit;
text-decoration-color: ${theme.colors.secondaryColor};
text-decoration: none;
}

a:hover {
text-decoration: underline;
text-decoration-color: ${theme.colors.secondaryColor};
}
body::-webkit-scrollbar {
    width: 5px;
    background-color: ${theme.colors.maincolor};
}

body::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
}

body::-webkit-scrollbar-track {
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.maincolor};
}
`;

export const ContentContainer = styled(Box)`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
`;
