<!--
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 07:03:52
 * @Description: 
-->
<template>
  <div class="List">
    这里是列表页
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
}
</style>
