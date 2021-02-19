module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    resolve: {
      symlinks: true,
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        appId: "peppermint-recipes",
        linux: {
          category: "Utility",
          desktop: "peppermint-recipes",
        },
      },
    },
  },
};
