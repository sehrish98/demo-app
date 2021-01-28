import React,{useEffect} from "react";
import {Route} from "react-router-dom";
import Layout from "./Layout"
import { Redirect } from "react-router-dom";

const CustomRoute = (props) => {
    if (!localStorage.getItem("accessToken")) {
      return <Redirect to="/login" />
    }
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