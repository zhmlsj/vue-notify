<template>
  <div>
    <div class="notify">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "notify",
  data() {
    return {
      message: "value"
    };
  }
};
</script>

<style scoped>
.notify {
  height: 100px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 15px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>