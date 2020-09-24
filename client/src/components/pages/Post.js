import React from 'react';
import { Redirect } from 'react-router-dom';
import TimeAgo from "react-timeago";


const Post = ({location})=> {
    if(!location.aboutProps) return <Redirect to='/'/>;
    const {post} = location.aboutProps;
    return (
        <div className="my-5 news-body">
            <div className="post-header px-2">
                <div
                    className="news-rank"
                >
                    <span>12</span>
                </div>
                <div className="news-info mt-3">
                    <p className="news-title">
                        {post.title}
                    </p>
                    <p className="news-create">
                        by {post.user.username} | <TimeAgo date={post.createdAt} />
                    </p>
                </div>

            </div>
            <div>
                <p className='news-create mt-3 ml-4'>
                    {post.content}
                </p>
            </div>
        </div>
    )
};

export default Post;