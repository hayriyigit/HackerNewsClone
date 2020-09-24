import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:5002/graphql",
    fetchOptions:{
        credentials: 'include'
    },
    request: operation => {
        operation.setContext({
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
    }

});
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>

    , document.getElementById('root'));