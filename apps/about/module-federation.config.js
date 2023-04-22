const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: "about",
  exposes: {
    "./Module": "./src/remote-entry.ts",
  },
};
