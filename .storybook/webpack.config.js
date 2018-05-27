const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Add typescript loader
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src/components"),
    loader: require.resolve("ts-loader"),
    options: {
      configFile: ".storybook/tsconfig.json"
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
