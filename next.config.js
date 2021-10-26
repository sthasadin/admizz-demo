// const withTM = require("next-transpile-modules")(["shared"]);
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const withSourceMaps = require('@zeit/next-source-maps')();
module.exports = withPlugins([withImages], {
  // module.exports = withPlugins([withTM(), withImages], {

  //   distDir: "../../dist/functions/.next_admin",

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
});
