/*
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-20 05:24:27
 * @Description:
 */
/*
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2021-12-20 05:20:11
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
