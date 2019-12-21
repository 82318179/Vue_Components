<template>
  <div>
    <Parent></Parent>
    <button @click="say">我来触发后代的say</button>
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";
export default {
  components: {
    Parent
  },
  methods: {
    say() {
      //触发后代组件中的say方法
      this.$broadcast("say", "King");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>