const { composePlugins, withNx } = require("@nrwl/webpack");
const { withReact } = require("@nrwl/react");
const { withModuleFederation } = require("@nrwl/react/module-federation");

const baseConfig = require("./module-federation.config");

const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ["shop", "http://127.0.0.1:8081/"],
    ["cart", "http://127.0.0.1:8082/"]
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
