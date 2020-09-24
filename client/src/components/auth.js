import React from 'react';
import { GET_ACTIVEUSER} from "../queries";
import {Query} from "react-apollo";
import { Redirect } from 'react-router-dom';


const auth = condition => Component => props => (
    <Query query={GET_ACTIVEUSER}>
        {
            ({data,loading}) => {
                if(loading) return null;

                return condition(data) ? <Component {...props}/> : <Redirect to="/"/>
            }
        }
    </Query>
);

export default auth;