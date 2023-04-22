const baseConfig = require("../../module-federation-base.config");

module.exports = {
  ...baseConfig,
  name: "shop",
  exposes: {
    "./Module": "./src/remote-entry.ts",
  },
};
