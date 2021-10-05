import React from "react";
import { Route, Switch } from "react-router";

import Layout from "./layouts/default/index";
import Frontpage from "./pages/frontpage/index";
import About from "./pages/about/index";
import Portfolio from "./pages/portfolio/index";
import Speaking from "./pages/speaking/index";
import Cv from "./pages/cv/index";
import NotFound from "./pages/notFound/index";

function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        strict={true}
        render={() => (
          <Layout>
            <Frontpage />
          </Layout>
        )}
      />

      <Route
        path="/about/"
        exact={true}
        strict={true}
        render={() => (
          <Layout>
            <About />
          </Layout>
        )}
      />
      <Route
        path="/portfolio/"
        exact={true}
        strict={true}
        render={() => (
          <Layout>
            <Portfolio />
          </Layout>
        )}
      />
      <Route
        path="/speaking/"
        exact={true}
        strict={true}
        render={() => (
          <Layout>
            <Speaking />
          </Layout>
        )}
      />
      <Route
        path="/cv/"
        exact={true}
        strict={true}
        render={() => (
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
