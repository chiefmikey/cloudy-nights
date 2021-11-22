import path from 'node:path';

const css = ['style-loader', 'css-loader'];

export default {
  mode: 'development',
  entry: {
    'tommyman-bundle': {
      import: './tommyman/client/src/index.js',
      filename: 'tommyman/client/public/dist/[name].js',
    },
    'cloudyman-bundle': {
      import: './cloudyman/client/src/index.js',
      filename: 'cloudyman/client/public/dist/[name].js',
    },
  },
  output: {
    path: path.resolve(),
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
