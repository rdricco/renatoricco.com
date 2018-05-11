import React, { Component } from "react";
const _ = require("lodash");
const slugify = require("lodash-addons");
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Row, Box, Container, BackgroundImage, Heading } from "rebass";
import { FadeIn } from "animate-components";
import Article from "../components/organisms/Card";
import SEO from "../components/Utils/SEO";
import styled from "styled-components";
import Slider from "react-styled-carousel";


const Flex = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


const BlogPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return <Box pb={100}>
      <Helmet title={config.siteTitle}>
        <SEO />
      </Helmet>
      <FadeIn>

      <Slider>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </Slider>

        <Container pt={4}>
          <Flex flexWrap={"wrap"} flexDirection={"row"}>
            {group.map(({ node }) => (
              <Article
                key={node.id}
                id={node.id}
                slug={node.slug}
                title={node.title}
                date={node.date}
                tags={node.tags}
                coverCard={`https://media.graphcms.com/resize=w:320,h:160,fit:crop/quality=v:75/compress/${
                  node.coverImage.handle
                }`}
                // excerpt={node.childMarkdownRemark.html}
                badgeColor={rebassTheme.colors.black}
                badgeBgColor={rebassTheme.colors.yellow}
                html={node.html}
              />
            ))}
          </Flex>
        </Container>
      </FadeIn>
    </Box>;
};

export default BlogPage;




