// 'production' or 'development'
const MODE = "production";
const enabledSourceMap = MODE === "production";

module.exports = {
  mode: MODE,
  watch: true,
  entry: {
    common: "./src/common.js",
    index: "./src/index.js",
    about: "./src/about.js"
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      // sass
      {
        test: /\.scss$/,
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          // postcss-loader  
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          // sass-loader
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  }
}
