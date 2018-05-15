import config from "../../../../data/SiteConfig";
import React, { Component } from "react";
import styled from "styled-components";
import { Container, Flex, Box, Row, Column } from "rebass";
import SocialLinks from "../../molecules/SocialLinks";
import Copyright from "../../atoms/Copyright";

const FlexLeft = Flex.extend`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
`

const CopyrightCenter = styled(Copyright)`
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
`
const BoxFooter = styled(Box)`
  box-shadow: 0px -3px 15px 0px rgba(0, 0, 0, 0.32);
`;

class Footer extends Component {
  render() {
    return (
      <BoxFooter className="footer" color={this.props.color} bg={this.props.bg}>
        <Container my={4}>
          <Row mx={0}>
            <Column w={1/2} px={0} my={0} py={0} className="LeftFooter">
            
              <Flex mr="auto">
                <SocialLinks
                color={this.props.color}
                size={'20'}
                github={config.userGithub}
                facebook={config.userFacebook}
                instagram={config.userInstagram}
                twitter={config.userTwitter}
                linkedin={config.userLinkedin}
                medium={config.userMedium}
                behance={config.userBehance}
                 >
                 </SocialLinks>
              </Flex>
            </Column>
            <Column px={0} my={0} w={1/2}className="RightFooter">
              <FlexLeft ml="auto">
                <CopyrightCenter
                author={config.userName} >
                </CopyrightCenter>
              </FlexLeft>
            </Column>
          </Row>
        </Container>
      </BoxFooter>
    );
  }
}

export default Footer;
