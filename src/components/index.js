/*
 * @Author: 沧澜
 * @Date: 2022-01-10 04:02:58
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 04:32:06
 * @Description:
 */
import { Row, Col } from "vant";
import { Header } from "./Layout";
import "vant/lib/row/index.css";
import "vant/lib/col/index.css";

const components = {
  ZRow: Row,
  ZCol: Col,
  ZHeader: Header,
};

const install = (app) => {
  Object.keys(components).forEach((key) => {
    if (key === "ZRow" || key === "ZCol") {
      app.component(key, components[key]);
    } else {
      app.component(components[key]["name"], components[key]);
    }
  });
};

const Zooui = {
  install,
};

export default Zooui;
