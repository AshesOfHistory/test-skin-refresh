<template>
  <div class="List">
    <div class="container" v-for="(item, index) in 10" :key="index">
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
    return {};
  },
};
</script>

<style lang="scss">
.List {
  padding: 10px;
  padding-bottom: 50px;
}
</style>
