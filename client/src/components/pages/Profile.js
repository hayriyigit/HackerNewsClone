import React from 'react';

import auth from '../auth';

import '../App.css';

const Profile = ({session: {activeUser}}) =>(
    <div className="my-5 mx-5 news-body p-5">
        <p className="news-create">user: <b>{activeUser.username}</b> </p>
    </div>
);

export default auth(session => session && session.activeUser)(Profile);