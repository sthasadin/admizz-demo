// // const withTM = require("next-transpile-modules")(["shared"]);
// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// // const withSourceMaps = require('@zeit/next-source-maps')();
// module.exports = withPlugins([withImages], {
//   // module.exports = withPlugins([withTM(), withImages], {

//   //   distDir: "../../dist/functions/.next_admin",

//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|mp4)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next',
//             name: 'static/media/[name].[hash].[ext]',
//           },
//         },
//       ],
//     })

//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     })

//     return config;
//   },
// });

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const withFonts = require("next-fonts");
// const withTM = require("next-transpile-modules")(["react-native-web"]);

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [withImages],
  nextConfig
);