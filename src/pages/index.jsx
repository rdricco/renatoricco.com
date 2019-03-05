import React, { Component } from "react";
const _ = require("lodash");
const slugify = require("lodash-addons");
import config from "../../data/SiteConfig";
import rebassTheme from "../components/_settings/rebassTheme";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Flex, Box, Container } from "rebass";
import { FadeIn } from "animate-components";
import Button from "../components/atoms/Button/";
import Article from "../components/organisms/Article";
import Banner from "../components/molecules/Banner";
import ChevronLeft from "react-icons/lib/fa/angle-left";
import ChevronRight from "react-icons/lib/fa/angle-right";
import SEO from "../components/Utils/SEO";
import PageTransition from "gatsby-plugin-page-transitions";

const BlogPage = ({ data, pathContext }) => {
  return (
    <PageTransition>
      <Box>
        <Helmet title={config.siteTitle}>
          <SEO />
        </Helmet>
        <FadeIn>
          <Banner
            heading={config.siteTitle}
            tagline={config.siteTagline}
            colorFont="#fff"
            bg={rebassTheme.colors.yellow}
          />
        </FadeIn>
      </Box>
    </PageTransition>
  );
};

export default BlogPage;
