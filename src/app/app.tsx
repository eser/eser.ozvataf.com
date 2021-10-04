import React from "react";
import { Route, Switch } from "react-router";

import Layout from "./layouts/default/index";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Projects from "./pages/projects/index";
import Attendences from "./pages/attendences/index";
import Cv from "./pages/cv/index";
import NotFound from "./pages/notFound/index";

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        strict={true}
        render={() =>
          (
            <Layout>
              <Home />
            </Layout>
          )}
      />

      <Route
        path="/about/"
        exact={true}
        strict={true}
        render={() =>
          (
            <Layout>
              <About />
            </Layout>
          )}
      />
      <Route
        path="/projects/"
        exact={true}
        strict={true}
        render={() =>
          (
            <Layout>
              <Projects />
            </Layout>
          )}
      />
      <Route
        path="/attendences/"
        exact={true}
        strict={true}
        render={() =>
          (
            <Layout>
              <Attendences />
            </Layout>
          )}
      />
      <Route
        path="/cv/"
        exact={true}
        strict={true}
        render={() =>
          (
            <Layout>
              <Cv />
            </Layout>
          )}
      />

      <Route render={() => <NotFound />} />
    </Switch>
  );
}

export { App as default };
