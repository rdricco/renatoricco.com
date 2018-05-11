import React, { Component } from "react";
import config from "../../data/SiteConfig"
import { Container, Box, Avatar, Heading } from "rebass";
import { FadeIn } from "animate-components";
import {
  FormGroup,
  Button,
  ButtonGroups,
  ButtonToolbar,
  FormControl,
  FormControlFile
} from "styled-form-component";

export default class AboutPage extends Component {
  render() {
    return <Box py={6}>
        <FadeIn>
          <Container>
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <label>Message</label>
                <FormControl textarea rows="3" />
              </FormGroup>
              <FormGroup>
                <label>Example file input</label>
                <FormControlFile type="file" />
              </FormGroup>
            </form>
          </Container>
        </FadeIn>
      </Box>;
  }
}
