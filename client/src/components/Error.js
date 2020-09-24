import React from 'react';
import {Alert} from "reactstrap";


const Error = props => {
    const { message } = props.error;
    return(
        <Alert color="danger">{message.split(":")[1]}</Alert>
    );
};

export default Error;