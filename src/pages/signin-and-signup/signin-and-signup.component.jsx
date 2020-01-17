import React, { Component } from 'react'

export default class SignInAndSignUp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email : '',
            password : '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email : '', password : ''});
    }

    handleChange = (event) => {
        
    }
    
    
    render() {
        return (
            <div >
                <div className="sign-in">
                    <h2>I early have an account.</h2>
                    <span>Sign in with your email and password.</span>
                    <from onSubmit={this.handleSubmit}>
                        <FormInput
                            label ="Your email"
                            type = "email"
                            required
                            value={this.state.email}
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            label ="Your passwrod"
                            type = "password"
                            required
                            value={this.state.passwrod}
                            handleChange={this.handleChange}
                        />
                    </from>
                </div>
            </div>
        )
    }
}
