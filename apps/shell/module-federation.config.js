const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: "shell",
  remotes: ["shop", "cart", "about"],
};
