<template>
  <div>
    son2:{{$attrs}}
    <grandson2 v-bind="$attrs"></grandson2>
  </div>
</template>

<script>
import Grandson2 from "./Grandson2.vue";
export default {
  components: {
    Grandson2
  },
  inheritAttrs: false
};
</script>

<style  scoped>
</style>