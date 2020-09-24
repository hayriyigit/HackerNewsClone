import React, { Component,Fragment } from 'react';
import TimeAgo from 'react-timeago';


import { Query} from "react-apollo";
import { GET_NEWS} from "../../queries";

import "../App.css";
import {Spinner} from "reactstrap";



class News extends Component{

render() {
    return(
        <div className="my-5 news-body">
            <Query query={GET_NEWS}>
                {
                    ({data, loading, error})=>{
                        if (loading) return <Spinner type="grow" size="lg" className="spinner" color="warning"/>;
                        console.log(data);
                        return(
                            <Fragment>
                                {
                                    data.new.map(post => (
                                        <div className="news-item px-2" key={post.id}>
                                            <div
                                                className="news-rank"
                                            >
                                                <span>12</span>
                                            </div>
                                            <div className="news-info mt-3">
                                                <p className="news-title">
                                                    {post.title}{" "}
                                                    <span className="news-link"> ({post.url ? post.url : null})</span>
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


export default News;