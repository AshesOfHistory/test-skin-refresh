<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-23 15:09:11
 * @Description: 
-->
<template>
  <div class="List">
    <div class="container" v-for="(item, index) in 10" :key="index">
      <div class="t-list-title">标题</div>
      <div class="t-list-sub-title">副标题</div>
      <div class="t-list-info">
        这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息
      </div>
    </div>

    <div class="theme-red">
      <div class="box">这里是主题内容展示区</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "List",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // 用js模拟scss所做的事情
    const black = "black";
    const red = "red";
    const blue = "blue";

    // 封装全局主题公共变量
    const themesColor = {
      black: {
        color: black,
        background: black,
        border: `1px solid ${black}`,
      },
      red: {
        color: red,
        background: red,
        border: `1px solid ${red}`,
      },
      blue: {
        color: blue,
        background: blue,
        border: `1px solid ${blue}`,
      },
    };

    // 总览各个主题样式
    const totalThemeMap = new Map();

    // 获取键值对中的某个变量
    const mapGet = (map, key) => {
      return map.get(key);
    };

    const forMapSet = (map, obj) => {
      for (let key in obj) {
        console.log("key", obj[key]);
        map.set(key, obj[key]);
      }
      return map;
    };

    // 合并键值对
    const mapMerge = (map1, map2) => {
      map2.forEach((value, key) => {
        map1.set(key, value);
      });
      return map1;
    };

    const CurrentTheme = "black";
    // 调用全局主题公共变量指定的值

    // 封装切换主题函数
    // @content   ->  slot  额外传入变量
    function themify(callback) {
      for (let themeName in themesColor) {
        let map = themesColor[themeName];
        // 缓存当前主题下的各个样式
        let themeMap = new Map();

        const themed = (attr) => {
          return mapGet(themeMap, attr);
        };
        for (let key in map) {
          const currentMap = new Map();
          currentMap.set(key, map[key]);
          themeMap = mapMerge(themeMap, currentMap);
        }
        totalThemeMap.set(`.theme-${themeName}`, themeMap);
        if (callback) {
          const contentObj = callback(themed);
          const contentMap = forMapSet(themeMap, contentObj);
          themeMap = mapMerge(themeMap, contentMap);
        }
        totalThemeMap.set(`.theme-${themeName}`, themeMap);
        console.log(themeMap, totalThemeMap);
      }
      console.log("当前生效主题", totalThemeMap.get(`.theme-${CurrentTheme}`));
    }

    themify((themed) => {
      return { fontSize: themed("color") };
    });
  },
};
</script>

<style lang="scss">
.List {
  padding: 10px;
  padding-bottom: 50px;
  .container {
    .t-list-title {
      font-size: $font-size-lg;
      font-weight: 600;
      color: $gray-900;
    }
    .t-list-sub-title {
      font-size: $font-size-base;
      font-weight: 500;
      color: $gray-600;
    }
    .t-list-info {
      font-size: $font-size-sm;
      font-weight: 400;
      color: $gray-300;
    }
  }

  $black: black;
  $red: red;
  $green: green;
  $blue: blue;
  $orange: orange;
  $purple: purple;

  $themes-color: (
    black: (
      color: $black,
      background: $black,
      border: 1px solid $black,
    ),
    red: (
      color: $red,
      background: $red,
      border: 1px solid $red,
    ),
    green: (
      color: $green,
      background: $green,
      border: 1px solid $green,
    ),
    blue: (
      color: $blue,
      background: $blue,
      border: 1px solid $blue,
    ),
    orange: (
      color: $orange,
      background: $orange,
      border: 1px solid $orange,
    ),
    purple: (
      color: $purple,
      background: $purple,
      border: 1px solid $purple,
    ),
  );

  $theme-map: ();
  @mixin zhuti() {
    @each $theme-name, $map in $themes-color {
      @debug $theme-name, $map;
      #{".theme-" + $theme-name} & {
        @each $key, $value in $map {
          $theme-map: map-merge(
            $theme-map,
            (
              $key: $value,
            )
          ) !global;
        }
        @content;
      }
    }
  }
  @function themed($key) {
    @return map-get($theme-map, $key);
  }
  .box {
    @include zhuti() {
      color: themed("color");
    }
  }
}
</style>
