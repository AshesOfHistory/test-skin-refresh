/*
 * @Author: 沧澜
 * @Date: 2021-12-20 05:59:05
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-20 06:10:01
 * @Description:
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 注意这边老版本是prependData，安装新版的sass的时候需要改为additionalData
        additionalData: `@import "./src/style/theme/index.scss";`,
      },
    },
  },
};
