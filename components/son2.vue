<template>
  <div>
    son2:{{$attrs}}
    <grandson2 v-bind="$attrs" v-on="$listeners"></grandson2>
  </div>
</template>

<script>
import Grandson2 from "./Grandson2.vue";
export default {
  components: {
    Grandson2
  },
  mounted() {
    console.log(this.$listeners); //输出所有绑定的方法
    this.$bus.$on("有人联系我", function() {
      console.log("找到我了");
    });
  },
  inheritAttrs: false
};
</script>

<style  scoped>
</style>