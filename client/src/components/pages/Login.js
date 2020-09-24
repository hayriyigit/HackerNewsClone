import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";

import { SIGNIN_USER } from "../../queries";
import Error from "../Error";

// Style imports
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Spinner,
} from "reactstrap";
import "../App.css";

const initialState = {
  username: "",
  password: "",
};

class Login extends Component {
  state = {
    ...initialState,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e, signIn) => {
    e.preventDefault();
    signIn()
      .then(async ({ data }) => {
        localStorage.setItem("token", data.signIn.token);
        await this.props.refetch();
        this.resetState();
        this.props.history.push("/");
      })
      .catch((e) => console.log(e));
  };

  formValidate = () => {
    const { username, password } = this.state;

    return !username || !password;
  };

  resetState = () => {
    this.setState({
      ...initialState,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="my-5 mx-5 news-body p-5">
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signIn, { loading, error }) => (
            <Form
              className="submit-form"
              onSubmit={(e) => this.onSubmit(e, signIn)}
            >
              {error ? <Error error={error} /> : null}
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
              {loading ? (
                <Spinner color="warning" />
              ) : (
                <Button
                  disabled={this.formValidate()}
                  type="submit"
                  color="warning"
                >
                  Login
                </Button>
              )}
              <FormText className="mt-3">
                <NavLink to="/register" className="bold">
                  Create Account
                </NavLink>
              </FormText>
            </Form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Login);
