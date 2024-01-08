// vue.config.js
module.exports = {
    // other options...
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
          options.compilerOptions = {
            ...options.compilerOptions,
            isCustomElement: tag => tag === 'plastic-button',
            experimentalCompatMode: 2,
          }
          return options
        })
    }
  }