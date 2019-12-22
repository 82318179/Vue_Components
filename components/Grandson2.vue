<template>
  <div>
    Grandson2:{{$attrs}}
    {{this.parent.money}}
  </div>
</template>

<script>
export default {
  inject: ["parent"], //this.parent就是parent组件的实例
  mounted() {
    this.$listeners.son(); //触发绑定的son方法
  }
};
</script>

<style scoped>
</style>