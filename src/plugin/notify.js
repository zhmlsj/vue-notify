import modal from "./notify.vue";

let notify = {
  // 需要在此对象中拥有一个install 方法
};
notify.install = function(
  Vue,
  options = {
    delay: 2000
  }
) {
  Vue.prototype.$notify = function(message = "默认", opt = {}) {
    if (notify.el) return;
    options = { ...options, ...opt }; // 用自己调用插件时传递过来的属性，覆盖掉默认设置好的
    let V = Vue.extend(modal); // 返回的是一个钩子函数的子类，参数是包含组件选项的对象
    let vm = new V(message);
    let oDiv = document.createElement("div"); // 创建一个div 将实例挂载到元素上

    vm.$mount(oDiv);
    vm.message = message;

    document.body.appendChild(vm.$el); //把当前实例这个真实对象扔到页面上

    notify.el = vm.$el;

    setTimeout(() => {
      // 延迟多少秒将dom元素移除掉
      document.body.removeChild(vm.$el); // 将实例的元素删除掉
      notify.el = null;
    }, options.delay);
  };
};
// 导出这个包含install的对象。如果时间Vue.use 就会调用这个install 方法
export default notify;
