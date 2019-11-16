import React from 'react';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import { Flex, Box, Heading, Text, Button, Image, Card } from 'rebass';

import config from '../../data/SiteConfig';
import Footer from '../components/Footer';
import Header from '../components/Header';

// import './index.css';

const FlexLeft = styled(Flex)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-content: center;
	align-items: center;
`;
const CopyrightCenter = styled(Box)`
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
`;
const BoxFooter = styled(Box)`
  box-shadow: 0px -3px 15px 0px rgba(0, 0, 0, 0.32);
`;

export default class MainLayout extends React.Component {
	render() {
		const MainBox = styled(Box)`
      min-height: 100vh;
      a,
      a:visited,
      a:active {
        color: inherit;
        text-decoration-color: yellow;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: yellow;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Poppins";
      }`;
		const { children } = this.props;
		return (
			<div className='layout-container'>
				<Helmet>
					<meta name='description' content={config.siteDescription} />
					<html lang='en' />
				</Helmet>
				<MainBox>
					<Header />
					{children}
					<Footer />
				</MainBox>
			</div>
		);
	}
}
