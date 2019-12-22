<template>
  <div>Grandson2:{{$attrs}}</div>
</template>

<script>
export default {
  mounted() {
    this.$listeners.son(); //触发绑定的son方法
  }
};
</script>

<style scoped>
</style>