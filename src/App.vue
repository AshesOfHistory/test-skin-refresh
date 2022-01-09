<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 04:11:07
 * @Description: 
-->
<template>
  <div id="app">
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/list" icon="orders-o">列表</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="setting-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    <router-view data-theme="light-theme" />
  </div>
</template>

<script>
import fs from "fs";
export default {
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    console.log("ThemesArr", THEMEARR, "THEMEFILES", THEMEFILES);
    document
      .getElementsByTagName("body")[0]
      .setAttribute("data-theme", "default");
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  font-size: $font-size;
  @include set-theme {
    color: get-color-variable("base-color");
    background: get-color-variable("background-color");
  }
}
</style>
