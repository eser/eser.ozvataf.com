const spawn = require("cross-spawn");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const webpackConfigClient = webpackConfig({}, { mode: "development" });
const webpackConfigServer = webpackConfig({ SSR: 1 }, { mode: "development" });

const compiler = webpack([
  {
    ...webpackConfigClient,
    devtool: "source-map",
    output: {
      ...webpackConfigClient.output,
      filename: "[name].js",
    },
  },
  {
    ...webpackConfigServer,
    devtool: "source-map",
  },
]);

let node;

compiler.hooks.watchRun.tap("Dev", (compiler) => {
  console.log(`Compiling ${compiler.name} ...`);
  if (compiler.name === "server" && node) {
    node.kill();
    node = undefined;
  }
});

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(stats?.toString("minimal"));
  const compiledSuccessfully = !stats?.hasErrors();
  if (compiledSuccessfully && !node) {
    console.log("Starting Node.js ...");
    node = spawn(
      "node",
      ["--inspect", path.join(__dirname, "build/dist/server.js")],
      {
        stdio: "inherit",
      },
    );
  }
});
