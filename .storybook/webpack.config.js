const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: [
                path.join(
                  __dirname,
                  "../node_modules/govuk_frontend_toolkit/stylesheets"
                ),
                path.join(__dirname, "../node_modules/govuk-elements-sass/public/sass")
              ]
            }
          }
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(jpg|png)$/,
        use: ["url-loader?limit=25000"]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ["url-loader?limit=25000"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            query: {
              name: "icon-[name]",
              prefixize: true
            }
          }
        ]
      }
    ]
  }
};
