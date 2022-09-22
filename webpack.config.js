const path = require('path');

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, './scungus.ts'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'scunguslib.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'var',
		library: 'scungus'
	},
};
