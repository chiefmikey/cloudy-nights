import path from 'node:path';

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/public/dist');

const css = ['style-loader', 'css-loader'];

export default {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'cloudyman-bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: css,
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: '100000&name=img/[name].[ext]' },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.cjs', '.tsx', '.ts'],
  },
  devtool: 'inline-source-map',
};
