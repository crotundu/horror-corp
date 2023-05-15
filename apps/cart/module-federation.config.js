const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
