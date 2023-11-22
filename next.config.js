module.exports = {  
    webpack: (config, { isServer, webpack }) => {
      if (!isServer) {
        config.plugins.push(
          new webpack.IgnorePlugin({ resourceRegExp: /^node:async_hooks$/ })
        );
      }
      return config;
    },
  };