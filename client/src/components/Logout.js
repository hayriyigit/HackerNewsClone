import React from 'react';
import {ApolloConsumer} from "react-apollo";
import {withRouter} from 'react-router-dom';

import {Button} from 'reactstrap';

const onClick = (history, client) => {
    localStorage.setItem('token','');
    client.resetStore();
    history.push('/');

};

const Logout = ({history}) => (
    <ApolloConsumer>
        {
            (client) => {
                return <Button color="danger" size="sm" onClick={() => onClick(history,client)}>Logout</Button>
            }
        }
    </ApolloConsumer>
);

export default withRouter(Logout);