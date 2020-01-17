import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase-utilities";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I early have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Your email"
            type="email"
            name="email"
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            label="Your passwrod"
            type="password"
            name="password"
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
