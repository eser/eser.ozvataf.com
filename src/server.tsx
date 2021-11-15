import fs from "fs";
import path from "path";
import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./app/app";

function readManifest(manifestFile: string) {
  const manifestFileContents = fs.readFileSync(manifestFile, "utf8");
  const manifest: Record<string, string> = JSON.parse(manifestFileContents);

  return Object.entries(manifest).reduce<{ css: string[]; js: string[] }>(
    (acc, cur) => {
      if (cur[0].endsWith(".css")) {
        return { ...acc, css: [...acc.css, cur[1]] };
      }
      if (cur[0].endsWith(".js")) {
        return { ...acc, js: [...acc.js, cur[1]] };
      }

      return acc;
    },
    { css: [], js: [] },
  );
}

const ejs = require("ejs");
const LRU = require("lru-cache");

const server = express();

ejs.cache = new LRU(100);

const manifestFile = path.join(__dirname, "../client/manifest.json");
const templateFile = `${__dirname}/index.template.html`;

const manifest = readManifest(manifestFile);

server.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={req.url}>
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
      files: manifest,
    },
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

server.use("/", express.static(path.join(__dirname, "../client")));

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
