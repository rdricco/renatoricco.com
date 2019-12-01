import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

export const LayoutContainer = styled(Box)`
  height: 100%;
  width: 100%;
  padding: 0px;
`;

export const AppContainer = styled(Box)`
  min-height: 100%;
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration-color: yellow;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: yellow;
  }
  a,
  p,
  div,
  button {
    font-family: "Anonymous Pro";
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins";
  }
`;

export const ContentContainer = styled(Box)`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 242, 237);
`;
