/*
 * @Author: 沧澜
 * @Date: 2021-12-20 05:59:05
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 07:40:32
 * @Description:
 */

const fs = require("fs");
const webpack = require("webpack");

// 获取主题文件名
const themeFiles = fs.readdirSync("./src/style/theme");
let ThemesArr = [];
themeFiles.forEach(function (item, index) {
  let stat = fs.lstatSync("./src/style/theme/" + item);
  if (stat.isDirectory() === true) {
    ThemesArr.push(item);
  }
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 注意: 在sass-loader v8 中，这个选项是prependData
        additionalData: `@import "./src/style/theme/index.scss";`,
      },
    },
  },
  configureWebpack: (config) => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          THEMEARR: JSON.stringify(ThemesArr),
          THEMEFILES: JSON.stringify(themeFiles),
        }),
      ],
    };
  },
};
