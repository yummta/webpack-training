var webpack = require('webpack');
var path = require('path');

const config = {
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	}
}

module.exports = config;
