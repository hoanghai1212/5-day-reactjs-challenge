import React, { Fragment } from "react";
import { Route } from "react-router-dom";

function AuthComponent(props) {
  return <Fragment>{props.children}</Fragment>;
}

function AuthTemplate({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <AuthComponent>
            <Component {...props} />
          </AuthComponent>
        );
      }}
    />
  );
}

export default AuthTemplate;
