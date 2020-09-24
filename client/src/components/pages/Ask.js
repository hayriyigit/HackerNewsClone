import React, { Component,Fragment } from 'react';
import TimeAgo from 'react-timeago';
import {NavLink} from "react-router-dom";

import { Query} from "react-apollo";
import { GET_QUESTIONS} from "../../queries";

import "../App.css";
import {Spinner} from "reactstrap";



class Ask extends Component{

    render() {
        return(
            <div className="my-5 news-body">
                <Query query={GET_QUESTIONS}>
                    {
                        ({data, loading, error})=>{
                            if (loading) return <Spinner type="grow" size="lg" className="spinner" color="warning"/>;
                            console.log(data);
                            return(
                                <Fragment>
                                    {
                                        data.question.map(post => (
                                            <div className="news-item px-2" key={post.id}>
                                                <div
                                                    className="news-rank"
                                                >
                                                    <span>12</span>
                                                </div>
                                                <div className="news-info mt-3">
                                                    <p>
                                                        <NavLink to={{pathname:'/post',aboutProps:{post}}}
                                                                className="news-title" style={{textDecoration:'none', color:'#33495F'}}>

                                                            {post.title}{" "}
                                                        </NavLink>
                                                    </p>
                                                    <p className="news-create">
                                                        by {post.user.username} | <TimeAgo date={post.createdAt} />
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Fragment>
                            )
                        }
                    }
                </Query>
            </div>
        );
    }
}


export default Ask;