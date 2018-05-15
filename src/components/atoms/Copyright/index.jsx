import React, { Component } from "react";
import { Small } from "rebass";

class Copyright extends Component {
  render() {
    return (

    <Small ml="auto">
        Copyright
        {' '}
        {(new Date().getFullYear())}
        .
        {' '}
        {this.props.author}
        {' '}
        all rights reserved.
    </Small>

    )
  };
}

export default Copyright;

