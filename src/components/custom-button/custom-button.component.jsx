import React, { Component } from "react";

import './custom-button.style.scss'

export default class CustomButton extends Component {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <button className="custom-button" {...otherProps}>
        {children}
      </button>
    );
  }
}
