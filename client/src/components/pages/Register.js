import React, { Component } from "react";
import {Mutation} from "react-apollo";
import { withRouter } from "react-router-dom";
import { CREATE_USER} from "../../queries";

import Error from '../Error';

// Style imports
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Spinner
} from "reactstrap";
import "../App.css";


const initialState = {
    username: "",
    password: "",
    passwordConfirm: ""
};

class Register extends Component{

    state = {
        ...initialState
    };


    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e, createUser) => {
        e.preventDefault();
        createUser().then(async ({data}) => {
            console.log(data);
            localStorage.setItem('token',data.createUser.token);
            await this.props.refetch();
            this.resetState();
            this.props.history.push('/')

        });
    };

    formValidate = () => {
        const { username, password, passwordConfirm } = this.state;

        return (!username || !password || !passwordConfirm || password !== passwordConfirm)
    };

    resetState = () =>{
        this.setState({
            ...initialState
        })
    };
    render() {
        const { username, password, passwordConfirm } = this.state;
        return (
            <div className="my-5 mx-5 news-body p-5">

                <Mutation mutation={CREATE_USER} variables={ {username, password} }>
                    {
                        (createUser, {loading, error}) => (

                            <Form
                                className="submit-form"
                                onSubmit={e => {
                                    this.onSubmit(e, createUser);
                                }}>
                                {error ? <Error error={error}/> : null}

                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        type="username"
                                        id="username"
                                        name="username"
                                        value={username}
                                        required={true}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        required={true}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password Confirm</Label>
                                    <Input
                                        type="password"
                                        id="password_confirm"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        required={true}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>

                                {loading ? <Spinner  color="warning" /> : <Button disabled={this.formValidate()} type="submit" color="warning">Register</Button>}


                            </Form>
                        )
                    }
                </Mutation>
            </div>
        );
    }
}


export default withRouter(Register);