import Vue from "vue";
// 这样直接引用vue ，引用的并不是vue.js 引用的是vue 的runtime
// vue =compiler +runtime (compiler 可以编译模板)
import App from "./App.vue";
// import VueRouter from "vue-router";
// let router = new VueRouter({});
import router from "./router";
import notify from "./plugin/notify";

// Vue.use(notify, { delay: 2000 }); //使用带有install的对象
Vue.use(notify);

new Vue({
  el: "#app",
  // template: "<div>hello world</div>",  // 这样写会报错
  // render 函数的作用是将虚拟dom渲染成真实的dom
  // render: function(createElement) {
  //   return createElement("h1", ["hello", createElement("span", "子元素")]);
  // },
  // render: h => h("h1", ["hello", h("span", "子元素")]),
  // render: h => h("h1", "hello") //es6写法
  render: h => h(App),
  router
});
