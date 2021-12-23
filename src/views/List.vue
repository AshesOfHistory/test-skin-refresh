<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-23 21:54:23
 * @Description: 
-->
<template>
  <div class="List">
    <van-field
      readonly
      clickable
      name="picker"
      :value="currentTheme"
      label="主题"
      placeholder="点击选择主题"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="themeCName"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <div>UI组件</div>
    <van-grid :column-num="columnNum[currentThemeIndex]">
      <van-grid-item
        v-for="value in gridNum[currentThemeIndex]"
        :key="value"
        :icon="gridIcon[currentThemeIndex]"
        text="文字"
      />
    </van-grid>
    <div>自定义HTML样式</div>
    <div class="grid-wrapper">
      <div class="grid-item">
        <div class="grid-icon"></div>
        <div class="grid-txt"></div>
      </div>
    </div>

    <div class="container" v-for="(item, index) in 3" :key="index">
      <div class="t-list-title">标题</div>
      <div class="t-list-sub-title">副标题</div>
      <div class="t-list-info">
        这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "List",
  components: {},
  data() {
    return {
      currentTheme: "默认",
      currentThemeIndex: 0,
      themeCName: ["默认", "老人", "年轻", "温暖", "寒冷"],
      themeValue: ["default", "old", "young", "warm", "cold"],
      gridIcon: ["location-o", "like-o", "star-o", "phone-o", "fire-o"],
      gridNum: [8, 4, 8, 8, 6],
      columnNum: [4, 2, 3, 4, 3],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(currentTheme) {
      this.currentTheme = currentTheme;
      this.showPicker = false;
      this.currentThemeIndex = this.themeCName.findIndex(
        (theme) => theme === currentTheme
      );
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", THEMEARR[this.currentThemeIndex]);
    },
  },
  mounted() {
    this.themeCName = THEMEARR;
    this.currentTheme = this.themeCName[0];
    // 用js模拟scss所做的事情
    const black = "#333";
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

    // 模拟插槽的合并添加作用
    const mockContent = (map, obj) => {
      for (let key in obj) {
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

    // 封装切换主题函数
    // @content   ->  slot  额外传入变量
    function themify(callback) {
      for (let themeName in themesColor) {
        let map = themesColor[themeName];
        // 缓存当前主题下的各个样式
        let themeMap = new Map();

        // 获取当前主题下指定属性的值
        const themed = (attr) => {
          return mapGet(themeMap, attr);
        };
        for (let attr in map) {
          const currentMap = new Map();
          currentMap.set(attr, map[attr]);
          themeMap = mapMerge(themeMap, currentMap);
        }
        totalThemeMap.set(`.theme-${themeName}`, themeMap);
        if (callback) {
          const contentObj = callback(themed);
          const contentMap = mockContent(themeMap, contentObj);
          themeMap = mapMerge(themeMap, contentMap);
        }
        totalThemeMap.set(`.theme-${themeName}`, themeMap);
      }
      console.log("当前生效主题", totalThemeMap.get(`.theme-${CurrentTheme}`));
      console.log("总览主题", totalThemeMap);
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
    // .t-list-title {
    //   font-size: $font-size-lg;
    //   font-weight: 600;
    //   color: $gray-900;
    // }
    // .t-list-sub-title {
    //   font-size: $font-size-base;
    //   font-weight: 500;
    //   color: $gray-600;
    // }
    // .t-list-info {
    //   font-size: $font-size-sm;
    //   font-weight: 400;
    //   color: $gray-300;
    // }
  }
}

$black: #333;
$red: red;
$green: green;
$blue: blue;
$orange: orange;
$purple: purple;

$themes-color: (
  default: (
    // 全局样式属性
    color: $info,
    font-weight: $font-weight-bold,
    font-size: $font-size-lg,
  ),
  old: (
    color: $danger,
    font-weight: $font-weight-bold,
    font-size: $font-size-slg,
  ),
  young: (
    color: $green,
    font-weight: $font-weight-bold,
    font-size: $font-size-lg,
  ),
  warm: (
    color: $orange,
    font-weight: $font-weight-bold,
    font-size: $font-size-lg,
  ),
  cold: (
    color: $blue,
    font-weight: $font-weight-bold,
    font-size: $font-size-lg,
  ),
);

$theme-map: null;

// 第三步: 定义混合指令, 切换主题,并将主题中的所有规则添加到theme-map中
@mixin themify() {
  @each $theme-name, $map in $themes-color {
    // & 表示父级元素  !global 表示覆盖原来的
    [data-theme="#{$theme-name}"] & {
      $theme-map: ();
      // 循环合并键值对
      @each $key, $value in $map {
        $theme-map: map-merge(
          $theme-map,
          (
            $key: $value,
          )
        ) !global;
      }
      // 表示包含 下面函数 themed()
      @content;
    }
  }
}

@function themed($key) {
  @return map-get($theme-map, $key);
}
.t-list-title,
.t-list-sub-title,
.t-list-info {
  @include themify() {
    color: themed("color");
    font-weight: themed("font-weight");
    font-size: themed("font-size");
  }
}
</style>
