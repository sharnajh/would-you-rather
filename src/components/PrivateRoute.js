import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authedUser ? <Component {...props} /> : <Redirect to="/would-you-rather" />
      }
    />
  );
};

export default PrivateRoute;
