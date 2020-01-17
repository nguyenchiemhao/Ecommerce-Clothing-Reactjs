import React, { Component } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export default class SignInAndSignUp extends Component {

  render() {
    return (
      <div className=''>
        <SignIn/>
        <SignUp/>
      </div>
    );
  }
}
