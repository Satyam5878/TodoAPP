var webpack = require("webpack");
var path = require("path");

module.exports = {
  devTool:"inline-source-map",
  entry:[
    "webpack-dev-server/client?http://127.0.0.1:8080",
    "webpack/hot/only-dev-server",
    "./src"
  ],
  output:{
    path:path.join(__dirname,"public"),
    filename:"bundle.js"
  },
  resolve:{
    moduleDirectories:["node_modules","src"],
    extensions:["",".js"]
  },
  modue:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loaders:["rect-hot","babel?presets[]=react,presets=es2015"]
      }
    ]
  },
  plugin:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErorsPlugin()
  ]
};
