/*
 * @Author: 沧澜
 * @Date: 2021-12-20 05:59:05
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-23 21:52:35
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
console.log("themeFiles", themeFiles, "ThemesArr", ThemesArr);
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 注意这边老版本是prependData，安装新版的sass的时候需要改为additionalData
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
