import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import {Button, Form, FormGroup, Label, Input, FormText, Spinner} from "reactstrap";
import "../App.css";

import {Mutation} from "react-apollo";
import {CREATE_POST} from "../../queries";

class Submit extends Component {
    state = {
        title: "",
        content: '',
        isUrl: null,
        url: '',
        isQuestion: null,
        user_id: this.props.session.activeUser.id
    };

    onChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });

        this.setState({
            isUrl: !(!this.state.url) && !this.state.content,
            isQuestion: !this.state.url || !(!this.state.content)
        })
    };

    onSubmit = (e,createPost) => {
        e.preventDefault();

        createPost().then(async ({data}) => {
            console.log(data);
            await this.props.refetch();
            this.props.history.push('/');
        });
    };
    render() {
        return (
            <div className="mx-5 my-5 news-body p-5 ">
                <Mutation mutation={CREATE_POST} variables={{...this.state}}>
                    {
                        (createPost,{loading, error}) => (
                            <Form
                                className="submit-form"
                                onSubmit={e => {
                                    this.onSubmit(e,createPost);
                                }
                                }>

                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input
                                        type="text"
                                        name="title"
                                        id="title"
                                        required={true}
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="url">Url</Label>
                                    <Input
                                        type="text"
                                        name="url"
                                        id="url"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <p className="ml-3 my-4 bold">or</p>
                                <FormGroup>
                                    <Label for="text">Text</Label>
                                    <Input
                                        type="textarea"
                                        name="content"
                                        id="content"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                {loading ? <Spinner  color="warning" /> : <Button type="submit" color="warning">Submit</Button>}

                                <FormText className="muted mt-3 bold">
                                    Leave url blank to submit a question for discussion. If there is no
                                    url, the text (if any) will appear at the top of the thread.
                                </FormText>
                            </Form>
                        )
                    }
                </Mutation>
            </div>
        );
    }
}

export default  withRouter(Submit);