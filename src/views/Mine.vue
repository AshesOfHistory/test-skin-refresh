<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 05:28:06
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-20 05:46:15
 * @Description: 
-->
<template>
  <div class="Mine">
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      label="主题"
      placeholder="点击选择主题"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "List",
  components: {},
  data() {
    return {
      value: "默认",
      columns: ["默认", "老人", "年轻", "温暖", "寒冷"],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
};
</script>
