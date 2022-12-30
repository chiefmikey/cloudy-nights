import path from 'node:path';

import { Configuration } from 'webpack';

const css = ['style-loader', 'css-loader'];

const config: Configuration = {
  mode: 'development',
  entry: {
    'public-bundle': {
      import: './public/index.ts',
      filename: 'public/dist/[name].js',
    },
    'tommyman-bundle': {
      import: './tommyman/client/src/index.ts',
      filename: 'tommyman/client/public/dist/[name].js',
    },
    'cloudyman-bundle': {
      import: './cloudyman/client/src/index.ts',
      filename: 'cloudyman/client/public/dist/[name].js',
    },
  },
  output: {
    path: path.resolve(),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
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
                '@babel/preset-typescript',
              ],
            },
          },
        ],
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
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.tsx', '.ts'],
  },
  devtool: 'inline-source-map',
  experiments: {
    topLevelAwait: true,
  },
};

export default config;
