const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/app.js'
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      // disableHostCheck: true,
      // sockPort: 8001,
      // sockHost: "localhost"
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/]
  }
})
