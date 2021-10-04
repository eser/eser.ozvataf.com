const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const webpack = require("webpack");

const NodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function configFn(envOptions, argv) {
  const isSsrMode = (envOptions && envOptions.SSR) || process.env.SSR === "1";
  const isDevMode = argv.mode !== "production";
  const env = process.env.APP_ENV ?? (isDevMode ? "development" : "production");
  const portStr = process.env.PORT ?? "8080";
  const port = parseInt(portStr, 10);
  const isServeMode = envOptions && envOptions.WEBPACK_SERVE;
  const currentPath = path.join(__dirname);

  // tsconfig location
  const tsConfig = !isSsrMode
    ? `${currentPath}/tsconfig.json`
    : `${currentPath}/tsconfig.server.json`;

  // load environment
  const envFiles = [".env", ".env.local", `.env.${env}`, `.env.${env}.local`];

  const envVariables = envFiles.reduce(
    (acc, cur) => {
      const envFilePath = `${currentPath}/${cur}`;

      if (fs.existsSync(envFilePath)) {
        const envFileContent = dotenv.config({ path: envFilePath }).parsed;

        console.log(`including config '${envFilePath}'...`);

        return { ...acc, ...envFileContent };
      }

      return acc;
    },
    {
      MODE: env,
      SERVE: isServeMode,
    },
  );

  const definedVariables = {
    "process.env": Object.entries(envVariables).reduce((acc, cur) => {
      acc[cur[0]] = JSON.stringify(cur[1]);

      return acc;
    }, {
      SSR: JSON.stringify(isSsrMode ? "1" : "0"),
    }),
  };

  // loaders
  const babelLoader = !isSsrMode && isServeMode && {
    loader: "babel-loader",
    options: {
      plugins: ["react-refresh/babel"],
    },
  };
  const tsLoader = {
    loader: "ts-loader",
    options: {
      configFile: tsConfig,
      transpileOnly: true,
    },
  };
  const styleLoader = !isSsrMode && isDevMode && { loader: "style-loader" };
  const miniCssExtractLoader = !isSsrMode && !isDevMode && {
    loader: MiniCssExtractPlugin.loader,
    options: {
      esModule: true,
    },
  };
  const cssModulesTypescriptLoader = !isSsrMode && {
    loader: "css-modules-typescript-loader",
  };
  const cssLoader = !isSsrMode && {
    loader: "css-loader",
    options: {
      esModule: true,
      importLoaders: 2,
      modules: {
        // mode: "local",
        auto: (resourcePath) =>
          resourcePath.endsWith(".module.css") ||
          resourcePath.endsWith(".module.scss") ||
          resourcePath.endsWith(".module.sass"),
        // exportGlobals: false,
        // localIdentName: "[path][name]__[local]--[hash:base64:5]",
        localIdentName: "[local]",
        localIdentContext: path.resolve(__dirname, "src"),
        // namedExport: true,
        exportLocalsConvention: "camelCaseOnly",
        // exportOnlyLocals: isSsrMode,
      },
    },
  };
  const sassLoader = !isSsrMode && {
    loader: "sass-loader",
    options: {
      implementation: require("sass"),
      additionalData: `$env: ${env};`,
      sourceMap: isDevMode,
    },
  };
  const svgoLoader = !isSsrMode && {
    loader: "svgo-loader",
    // options: {
    //   plugins: [
    //     { removeTitle: true },
    //     { convertColors: { shorthex: false } },
    //     { convertPathData: false },
    //   ],
    // },
  };
  const ignoreLoader = isSsrMode && {
    loader: "ignore-loader",
  };

  // plugins
  const forkTsCheckerPlugin = new ForkTsCheckerWebpackPlugin();
  const definePlugin = new webpack.DefinePlugin(definedVariables);
  const reactRefreshPlugin = !isSsrMode && isServeMode &&
    new ReactRefreshPlugin();
  // const hotModuleReplacementPlugin = isServeMode && new webpack.HotModuleReplacementPlugin();
  const nodeExternalsPlugin = isSsrMode && NodeExternals({
    // load non-javascript files with extensions, presumably via loaders
    allowlist: [/\.(?!(?:[tj]sx?|json)$).{1,5}$/i],
  });
  const cleanPlugin = new CleanWebpackPlugin();
  const manifestPlugin = !isSsrMode && new WebpackManifestPlugin();
  const cssExtractPlugin = !isSsrMode && !isDevMode &&
    new MiniCssExtractPlugin();
  const copyPluginClient = !isSsrMode && new CopyPlugin({
    patterns: [
      { from: "public", to: "." },
    ],
  });
  const copyPluginServer = isSsrMode && new CopyPlugin({
    patterns: [
      { from: "src/index.template.html", to: "." },
    ],
  });
  const htmlPlugin = !isSsrMode && new HtmlWebpackPlugin({
    title: "eser.ozvataf.com",
    innerHtml: "",
    template: `${currentPath}/src/index.template.html`, // template file
    filename: "index.html", // output file
  });
  const bannerPlugin = isSsrMode && new webpack.BannerPlugin({
    banner: 'require("source-map-support").install();',
    raw: true,
    entryOnly: false,
  });

  // resolve plugins
  const distPath = !isSsrMode
    ? `${currentPath}/build/dist/client`
    : `${currentPath}/build/dist/server`;
  const tsconfigPathsResolvePlugin = new TsconfigPathsPlugin(
    { configFile: tsConfig },
  );

  // entries
  const entry = !isSsrMode
    ? ({
      main: "./src/index.tsx",
    })
    : ({
      server: "./src/server.tsx",
    });

  // main config
  const config = {
    name: !isSsrMode ? "client" : "server",
    target: !isSsrMode ? "web" : "node",
    mode: isDevMode ? "development" : "production",
    devtool: isDevMode ? "eval-cheap-source-map" : "source-map",
    externalsPresets: { node: isSsrMode },
    node: {
      __dirname: false,
    },

    devServer: {
      static: distPath,
      historyApiFallback: true,

      hot: true,
      // http2: true,
      port: port,
    },

    entry: entry,

    output: {
      path: distPath,
      publicPath: "/",

      assetModuleFilename: "assets/[name][ext]",
      filename: !isSsrMode ? "[name].bundle.[hash].js" : "[name].js",

      globalObject: "this",
      // library: {
      //   type: "commonjs2",
      // },
    },

    plugins: [
      forkTsCheckerPlugin,
      definePlugin,
      // hotModuleReplacementPlugin,
      reactRefreshPlugin,
      cleanPlugin,
      manifestPlugin,
      cssExtractPlugin,
      copyPluginClient,
      copyPluginServer,
      htmlPlugin,
      bannerPlugin,
    ].filter(Boolean),

    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      plugins: [
        tsconfigPathsResolvePlugin,
      ].filter(Boolean),
      alias: {
        "react-native": "react-native-web",
        "../../theme.config$": path.join(__dirname, "semantic-ui/theme.config"),
        // "semantic-ui/site": path.join(__dirname, "semantic-ui/site"),
      },
    },
    externals: [
      nodeExternalsPlugin,
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          // exclude: /\/node_modules\//,
          exclude: [],
          use: [
            babelLoader,
            tsLoader,
          ].filter(Boolean),
        },
        {
          test: /\.css$/,
          exclude: [],
          use: [
            styleLoader,
            miniCssExtractLoader,
            cssModulesTypescriptLoader,
            cssLoader,
            ignoreLoader,
          ].filter(Boolean),
        },
        {
          test: /\.s(c|a)ss$/,
          exclude: [],
          use: [
            styleLoader,
            miniCssExtractLoader,
            cssModulesTypescriptLoader,
            cssLoader,
            sassLoader,
            ignoreLoader,
          ].filter(Boolean),
        },
        {
          test: /\.svg$/,
          type: !isSsrMode ? "asset/resource" : "javascript/auto",
          exclude: [],
          use: [
            svgoLoader,
            ignoreLoader,
          ].filter(Boolean),
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: !isSsrMode ? "asset/resource" : "javascript/auto",
          exclude: [],
          use: [
            ignoreLoader,
          ].filter(Boolean),
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/, // |svg
          type: !isSsrMode ? "asset/resource" : "javascript/auto", // asset/inline
          exclude: [],
          use: [
            ignoreLoader,
          ].filter(Boolean),
        },
      ],
    },
  };

  return config;
}

module.exports = configFn;
