/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-12 15:43:26
 * @LastEditTime: 2019-08-08 16:34:02
 * @LastEditors: Do not edit
 * @Description:
 */
/* jshint esversion: 6  */
import data from "./data/test.json";
import "./style/index.css"; //loader=>css-loader让webpack支持解析css module ,style-loader webpack转换
import "./style/test.less";
import { log } from "util";
import axios from "axios";
//使用 解析
import { x, y, z } from "@/b";
//外部依赖
import $ from "jquery";
import _ from "lodash";

function createDomElement() {
  let dom = document.createElement("div");
  dom.innerHTML = _.join(["aicoder.com", "好!", "线下实习"], "");
  dom.classList.add("box");
  return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);
console.log("====================================");
console.log(123);
console.log(4345);
console.log("====================================");
//document.write(JSON.stringify(data));//json模块会被转成object需要再转成json
//发送ajax数据 npm i axios -P  测试热部署中的代理功能
axios.get("/api/compmsglist").then(res => {
  console.log("res:", res);
});

//测试babel转码es6
class Demo {
  show() {
    console.log("this.age:", this.age);
  }
  get Age() {
    return this._age;
  }
  set Age(value) {
    this._age = value + 1;
  }
}
let d = new Demo();
d.Age = 19;
d.show();
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
//解析
console.log(x, y, z);

//外部依赖
$(function() {
  $(".box").click(function() {
    alert(1);
  });
});
//json
console.log(data.age);
