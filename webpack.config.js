const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      // util: false
      util: require.resolve('util/'),
    },
  },
};
