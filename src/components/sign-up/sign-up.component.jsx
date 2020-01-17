import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.style.scss'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cf_password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "", name: "", cf_password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            label="Your name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Your email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Your password"
            required
          />
          <FormInput
            name="cf_password"
            type="password"
            value={this.state.cf_password}
            onChange={this.handleChange}
            label="Confirm your password"
            required
          />
          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
