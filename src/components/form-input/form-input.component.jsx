import React, { Component } from "react";

import "./form-input.style.scss";

export default class FormInput extends Component {
  render() {
    const { label, handleChange, ...otherInputProps } = this.props;
    return (
      <div className="input-group">
        <input
          className="form-input"
          onChange={handleChange}
          {...otherInputProps}
        />
        {label ? (
          <label
            className={`${
              otherInputProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
}
