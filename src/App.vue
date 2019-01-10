<template>
  <div>
    <div>{{msg}}</div>
    <router-view />
    <button @click="show">notify</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {
    show() {
      this.$notify();
      // this.$notify("测试", {
      //   delay: 5000
      // });
    }
  }
};
</script>

<style scoped>
</style>