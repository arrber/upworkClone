import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';

class Login extends Component {
    state = {
        email: {
            value: '',
            type: 'email',
            errors: {
                required: false
            }
        },
        password: {
            value: '',
            type: 'password',
            errors: {
                required: false
            }
        },
        loading: false,
        success: null,
        error: null
    };

    emailHandler = e => {
        // copies the object from state
        const emailCopy = Object.assign({}, this.state.email);
        // adds input value the the property value of the copied object
        emailCopy.value = e.target.value;
        // if value length is bigger than zero then set required to false in case it was set to true before and vice versa
        if(emailCopy.value.length > 0){
            emailCopy.errors.required = false;
        }
        else
        {
            emailCopy.errors.required = true;
        }
        // update email with the modified copy
        this.setState({ email: emailCopy });
    }

    passwordHandler = e => {
        const passwordCopy = Object.assign({}, this.state.password);
        passwordCopy.value = e.target.value;
        if(passwordCopy.value.length > 0){
            passwordCopy.errors.required = false;
        }
        else
        {
            passwordCopy.errors.required = true;
        }
        this.setState({ password: passwordCopy });
    }

    loginHandler = e => {
        e.preventDefault();
        // when we want to submit the form we check once more if email and password are empty
        // if email is empty the we trigger validation so we see the message 'email is required' inside the form
        if(this.state.email.value.length === 0){
            const emailCopy = Object.assign({}, this.state.email);
            emailCopy.errors.required = true;
            this.setState({ email: emailCopy });
        }
        
        if(this.state.password.value.length === 0){
            const passwordCopy = Object.assign({}, this.state.password);
            passwordCopy.errors.required = true;
            this.setState({ password: passwordCopy });
        }

        if(this.state.password.value.length === 0 || this.state.email.value.length === 0){
            // if email or password are empty, end execution here so we don't send http request (simulated timeout for now)
            return;
        }

        // in every submit we starte loading and reset error and success
        this.setState({ loading: true, error: false, success: false });
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/user/login',
            data: {
                email: this.state.email.value,
                password: this.state.password.value
            }
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                this.setState({ loading: false, error: false, success: true });
            })
            .catch((error) => {
                this.setState({ loading: false, error: true, success: false });
            })

    };

    passwordVisibilityHandler = () => {
        // copy password object so we can modify it - DO NOT MUTATE STATE DIRECTLY
        const passwordCopy = Object.assign({}, this.state.password);
        // if password type is text change it to password - check state above
        if(passwordCopy.type === 'text'){
            passwordCopy.type = 'password';
        } 
        // if password type is password change it to text - check it above
        else if(passwordCopy.type === 'password'){
            passwordCopy.type = 'text';
        }
        this.setState({ password: passwordCopy });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 login--page">
                    <div className="login--box">
                        <h3 className="title">Log in and get to work</h3>
                        {this.state.loading ? <div className="loader">Loading...</div> : null}
                        {this.state.error ? 
                            (
                                <div className="error--message">Invalid Data</div>
                            ) : null
                        }
                        {this.state.success ? 
                            (
                                <div className="success--message">Successful Login</div>
                            ) : null
                        }
                        <form onSubmit={this.loginHandler}>
                            <div className="form--group">
                                <label htmlFor="email-0123">Email</label>
                                <input 
                                    type={this.state.email.type} 
                                    placeholder="Type your email here"
                                    onChange={this.emailHandler}
                                    value={this.state.email.value}
                                    id="email-0123"
                                />
                                {/* ternary expression */}
                                {this.state.email.errors.required ? <span className="error-message">Email is required</span> : null}
                            </div>
                            <div className="form--group">
                                <label htmlFor="password-0123">Password</label>
                                <input 
                                    type={this.state.password.type} 
                                    placeholder="Type your password here"
                                    onChange={this.passwordHandler}
                                    value={this.state.password.value}
                                    id="password-0123"
                                />
                                <FontAwesomeIcon icon={this.state.password.type === 'password' ? faEye : faEyeSlash} onClick={this.passwordVisibilityHandler}/>
                                {this.state.password.errors.required ? <span className="error-message">Password is required</span> : null}
                            </div>
                            <div className="form--group">
                                <button className="btn--login">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;