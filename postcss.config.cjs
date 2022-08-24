const plugins = {
  "postcss-custom-properties": {
    // importFrom: "./styles/theme.css",
    preserve: false,
  },
  "postcss-flexbugs-fixes": {},
  "postcss-nesting": {},
  "postcss-preset-env": {
    autoprefixer: {
      flexbox: "no-2009",
      grid: "autoplace",
    },
    stage: 3,
    features: {
      // "custom-properties": false,
      "nesting-rules": true,
    },
  },
};

// This branch definitly runs...
if (process.env.NODE_ENV === "production") {
  // This doesn't seem to work. None of the css is purged...
  plugins["@fullhuman/postcss-purgecss"] = {
    content: [
      "./pages/**/*.page.{js,jsx,ts,tsx}",
    ],
    // defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ["html", "body"],
  };

  //   // Doubt I need this but leaving it here just in case...
  //   plugins["cssnano"] = {
  //     preset: ["default", {
  //       discardComments: {
  //         removeAll: true,
  //       },
  //     }],
  //   };
}

const postcssConfig = {
  plugins,
};

module.exports = postcssConfig;
