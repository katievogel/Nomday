import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import axios from "axios";

class CreateAccount extends Component {
    state = {
        userName: "",
        passWord: "", 
        redirectTo: null
    }

    nameInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    nameSubmit = event => {
        event.preventDefault();
            if(!this.state.username || !this.state.password) {
                alert("You must enter a username and password");
            } else if (this.state.password.length < 6){
                alert(
                    `Password must be more than 6 characters, ${this.state.username}`
                );
            } else {
                alert(`Hello ${this.state.username}`);
            }
            axios.post('/auth/createAccount', {
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                this.setState({
                    redirectTo: '/'
                })
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        if(this.state.redirectTo){
            return <Redirect to={
                {pathname:this.state.redirectTo}} />
            }
        return (
            <div className = "loginPage">
                <section className = "containerLogin">
                <div className = "accountHeader">Create Your Account</div>
                <div className="loginForm">
                <form action="/createaccount/" method="POST">
                    <div className="containerField">
                        <span className="username">Username:</span>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.nameInput}
                            />
                    </div>
                </form>
                </div>
                </section>
            </div>
        )
        }
    }

export default CreateAccount;
