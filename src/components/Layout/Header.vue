<!--
 * @Author: 沧澜
 * @Date: 2022-01-10 04:22:09
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 04:25:31
 * @Description: 
-->
  <header
    class="z-header"
    :class="{'z-header--fixed': fixed}">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'ZHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@include b(z-header) {
  @include m(fixed) {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 10;
  }
} 
</style>