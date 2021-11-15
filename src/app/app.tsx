import React from "react";
import { Route, Routes } from "react-router";

import ScrollToTop from "./scroll-to-top";

import Layout from "./layouts/default/index";
import Frontpage from "./pages/frontpage/index";
import About from "./pages/about/index";
import Portfolio from "./pages/portfolio/index";
import Speaking from "./pages/speaking/index";
import Cv from "./pages/cv/index";
import NotFound from "./pages/notFound/index";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Frontpage />
            </Layout>
          }
        />

        <Route
          path="/about/"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/portfolio/"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/speaking/"
          element={
            <Layout>
              <Speaking />
            </Layout>
          }
        />
        <Route
          path="/cv/"
          element={
            <Layout>
              <Cv />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </ScrollToTop>
  );
}

export { App as default };
