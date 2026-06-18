// next.config.js
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  output: "export",
  basePath: isDev ? "" : "/Sample-Websites",
  assetPrefix: isDev ? "" : "/Sample-Websites/",
  trailingSlash: true,
};
