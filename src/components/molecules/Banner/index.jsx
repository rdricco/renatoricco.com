import React from 'react';
import styled from 'styled-components';
import config from "../../../../data/SiteConfig"
import { Box, Container, Row, Banner, Heading, Subhead, Text, Avatar, Link } from "rebass";
import ReactFitText from 'react-fittext'

class BannerSite extends React.Component {
    render() {
        const LinkBold = Link.extend`
        font-weight: bold;
        :hover{
            color: black;
        }
        `
        const BannerHome = Banner.extend`
          box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.32) inset;
          min-height: 90vh;
          background: linear-gradient(to right, #F2994A, #F2C94C);
          ${'' /* background: linear-gradient(to right, ${this.props.colorLeft}, ${this.props.colorRight}); */}
          text-decoration: none;
          color: ${this.props.colorFont};`;
        return <BannerHome bg={this.props.bg} backgroundImage={this.props.bgImage} className="BannerHome">
            {/* <Avatar my={2} size={120} alt-text='avatar.png' src={config.userAvatar} /> */}
            <Container>
              <Heading fontSize={[6, 6, 7, 9]}>
                Hi, my name is renato ricco.
              </Heading>
              <Subhead fontSize={[4, 4, 5, 6]}>
                I'm a graphic designer & front-end developer.
              </Subhead>
              <Text>
                I was born in São Paulo, where I currently live. <br />
                Do you have a project we can work together? Nice, feel free to
                <LinkBold href="mailto:contact@renatoricco.com" children=" contact me." />
              </Text>
            </Container>
          </BannerHome>;
    }
}

export default BannerSite;