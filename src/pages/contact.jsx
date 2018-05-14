import React, { Component } from "react";
import config from "../../data/SiteConfig"
import { Container, Flex, Box, Avatar, Heading, Button } from "rebass";
import { FadeIn } from "animate-components";
import {
  FormGroup,
  FormControl,
  FormControlFile
} from "styled-form-component";

export default class AboutPage extends Component {
  render() {
    return <Box py={6}>
        <FadeIn>
          <Container>
            <Flex>
              <Box w={1 / 2}>
                <form>
                  <FormGroup>
                    <label>Name</label>
                    <FormControl type="email" placeholder="Your name" />
                  </FormGroup>
                  <FormGroup>
                    <label>Email address</label>
                    <FormControl type="email" placeholder="name@example.com" />
                  </FormGroup>
                  <FormGroup>
                    <label>Subject</label>
                    <FormControl select>
                      <option>work together</option>
                      <option>offer a job</option>
                      <option>some project</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <label>Message</label>
                    <FormControl textarea rows="3" />
                  </FormGroup>
                  <FormGroup>
                    <Button>
                    Submit
                    </Button>
                  </FormGroup>
                </form>
              </Box>
              {/* <Box w={1 / 2}>
                <Avatar size={120} src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
              </Box> */}
            </Flex>
          </Container>
        </FadeIn>
      </Box>;
  }
}
