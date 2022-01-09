/*
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 04:05:46
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
import { Tabbar, TabbarItem, Picker, Popup, Field, Grid, GridItem } from "vant";
import "vant/lib/index.css";
import "normalize.css/normalize.css";
import Zooui from "@/components";

Vue.config.productionTip = false;
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Zooui);
// Vue.component("ZRow", Row);
// Vue.component("ZCol", Col);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
