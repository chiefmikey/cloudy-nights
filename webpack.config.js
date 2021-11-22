import path from 'node:path';

const css = ['style-loader', 'css-loader'];

export default {
  mode: 'development',
  entry: {
    'tommyman-bundle': path.join(
      path.resolve(),
      'tommyman/client/src/index.js',
    ),
    'cloudyman-bundle': path.join(
      path.resolve(),
      'cloudyman/client/src/index.js',
    ),
  },
  output: {
    filename: '[name].js',
    path: path.join(path.resolve(), 'docs/dist'),
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
