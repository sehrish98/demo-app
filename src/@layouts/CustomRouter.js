import React from "react";
import {Route} from "react-router-dom";
import Layout from "./Layout"

const CustomRoute = (props) => {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      component={() => (
        <Layout>
          <props.component />
        </Layout>
      )}
    />
  );
};

export default CustomRoute;