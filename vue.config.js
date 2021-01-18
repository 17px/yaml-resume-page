module.exports = {
  configureWebpack: {
    externals: {
      vue: "Vue",
      axios: "axios",
      "js-yaml": "yaml",
    },
  },
};
