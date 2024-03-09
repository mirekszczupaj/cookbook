const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@import "./src/main.scss";'
  //     }
  //   }
  // }
})
