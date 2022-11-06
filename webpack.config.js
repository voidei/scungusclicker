/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, "src/scripts/ts/scungus.ts"),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "scunguslib.js",
		path: path.resolve(__dirname, "${project.buildDir}"),	// Path: scungusclicker-main\build\classes\kotlin\js\main
		libraryTarget: "var",
		library: "scungus"
	},
}
