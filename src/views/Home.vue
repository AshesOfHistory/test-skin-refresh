<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 07:06:53
 * @Description: 
-->
<template>
  <div class="home">
    <div>这里是首页,点击下方选择框切换主题</div>
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
        :columns="themeValue"
        @confirm="onConfirm"
        @cancel="showPicker = false"
        :default-index="currentThemeIndex"
      />
    </van-popup>

    <van-grid :column-num="columnNum[currentThemeIndex]">
      <van-grid-item
        v-for="value in gridNum[currentThemeIndex]"
        :key="value"
        :icon="gridIcon[currentThemeIndex]"
        text="文字"
      />
    </van-grid>

    <div class="container" v-for="(item, index) in 3" :key="index">
      <div class="t-home-title">标题</div>
      <div class="t-home-sub-title">副标题</div>
      <div class="t-home-info">
        这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息这是一段很长的详情信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      currentTheme: "default",
      currentThemeIndex: 0,
      // themeCName: ["默认", "老人"],
      themeValue: [],
      gridIcon: ["location-o", "like-o"],
      gridNum: [8, 4],
      columnNum: [4, 2],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(currentTheme) {
      this.currentTheme = currentTheme;
      this.showPicker = false;
      this.currentThemeIndex = this.themeValue.findIndex(
        (theme) => theme === currentTheme
      );
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", THEMEARR[this.currentThemeIndex]);
    },
  },
  mounted() {
    this.themeValue = THEMEARR;
    this.currentThemeIndex = this.themeValue.findIndex(
      (theme) => theme === "default"
    );
    this.currentTheme = this.themeValue[this.currentThemeIndex];
  },
};
</script>

<style lang="scss">
.home {
  padding: 10px;

  .t-home-title,
  .t-home-sub-title,
  .t-home-info {
    @include themify() {
      color: themed("color");
      font-weight: themed("font-weight");
      font-size: themed("font-size");
    }
  }
}
</style>
