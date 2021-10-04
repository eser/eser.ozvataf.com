import fs from "fs";
import path from "path";
import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./app/app";

const ejs = require("ejs");
const LRU = require("lru-cache");

const server = express();
ejs.cache = new LRU(100);

const templateFile = `${__dirname}/index.template.html`;

const manifestFile = path.join(__dirname, "../client/manifest.json");
const manifestFileContents = fs.readFileSync(manifestFile, "utf8");
const manifest = JSON.parse(manifestFileContents);

const context = {};

server.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );

  const data = {
    htmlWebpackPlugin: {
      options: {
        title: "eser.ozvataf.com",
        innerHtml: component,
      },
    },
    assets: manifest,
  };
  const options = {};

  fs.readFile(templateFile, "utf8", (err, str) => {
    if (err) {
      res.send(err);

      return;
    }

    const result = ejs.render(str, data, options);
    res.send(result);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
