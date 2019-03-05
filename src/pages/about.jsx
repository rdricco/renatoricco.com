import React, { Component } from "react";
import config from "../../data/SiteConfig";
import { Container, Box, Avatar, Heading } from "rebass";
import { FadeIn } from "animate-components";
import ReactFitText from "react-fittext";
import SEO from "../components/Utils/SEO";
import PageTransition from "gatsby-plugin-page-transitions";

export default class AboutPage extends Component {
  render() {
    return (
      <PageTransition>
        <Box py={6}>
          <FadeIn>
            <Container>
              <Avatar
                my={2}
                size={100}
                alt-text="avatar.png"
                src={config.userAvatar}
              />
              <ReactFitText maxFontSize={"45"}>
                <h1>
                  My work ranges from graphic-design to front-end development. I
                  was born in São Paulo, where I currently live. If you would
                  like to collaborate, feel free to contact me.
                </h1>
              </ReactFitText>
            </Container>
          </FadeIn>
        </Box>
      </PageTransition>
    );
  }
}
