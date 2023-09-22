const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'production',
	target: 'node',
	plugins:[
    new ESLintPlugin(),
    new CopyPlugin({ patterns: [
      {
        from: 'src/assets/words.txt',
        to: 'src/assets/'
      },
      'pm2.json',
			'.env'
    ] })
  ],
	entry: {
		app: ['./src/server.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	externals: [nodeExternals()],
}