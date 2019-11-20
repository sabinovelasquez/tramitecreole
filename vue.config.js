module.exports = {
	publicPath: "./",
  chainWebpack: config => {
		config.module
			.rule("vue")
			.use("vue-svg-inline-loader")
				.loader("vue-svg-inline-loader")
				.options({ /* ... */ });
	},
	configureWebpack: config => {
    if (process.env.development) {
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.VUE_APP_SENDGRID_API_KEY': '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'
      }))
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}