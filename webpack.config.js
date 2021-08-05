const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputDirectory = 'dist';

module.exports = {
	/**
	 * Once working on the new UI, change the entry point.
	 * NEW UI ENTRY: './src/newClient/index.js'
	 * OLD UI ENTRY: './src/client/index.js'
	 * DONT FORGET TO CHANGE BACK TO THE OLD UI ENTRY BEFORE PUSHING!!!!!!
	 */
	entry: ['babel-polyfill', './src/newClient/index.js'],
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
		disableHostCheck: true,
		proxy: {
			'/api': 'http://localhost:8080',
		},
	},
	plugins: [
		new CleanWebpackPlugin([outputDirectory]),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
	],
};
