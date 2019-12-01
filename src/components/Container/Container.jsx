import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Container.styles';

const Container = (props) => (
  <div className="ContainerWrapper">
    Test content
  </div>
);

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;
