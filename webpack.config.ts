import path from 'node:path';

const css = ['style-loader', 'css-loader'];

const config = {
  devtool: 'inline-source-map',
  entry: {
    'cloudyman-bundle': {
      filename: 'cloudyman/client/public/dist/[name].js',
      import: './cloudyman/client/src/index.ts',
    },
    'public-bundle': {
      filename: 'public/dist/[name].js',
      import: './public/index.ts',
    },
    'tommyman-bundle': {
      filename: 'tommyman/client/public/dist/[name].js',
      import: './tommyman/client/src/index.ts',
    },
  },
  experiments: {
    topLevelAwait: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/,
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
  output: {
    path: path.resolve(),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.tsx', '.ts'],
  },
};

export default config;
