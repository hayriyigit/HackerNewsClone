import React from "react";
import { Spinner } from "reactstrap";
import { Query } from "react-apollo";

import { GET_ACTIVEUSER } from "../queries";

import "./App.css";

const SessionWrapperHOC = (Component) => (props) => (
  <Query query={GET_ACTIVEUSER}>
    {({ data, loading, refetch }) => {
      if (loading)
        return (
          <Spinner type="grow" size="lg" className="spinner" color="warning" />
        );
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default SessionWrapperHOC;
