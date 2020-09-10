import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../component/Layout/Header/Header.jsx";

function HomeComponent(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

function HomeTemplate({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <HomeComponent>
            <Component {...props} />
          </HomeComponent>
        );
      }}
    />
  );
}

export default HomeTemplate;
