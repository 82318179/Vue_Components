<template>
  <div>
    Grandson1 {{value}}
    <button @click="change">孙子要修改</button>
    <button @click="say">触发say</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    change() {
      //  this.$parent.$emit("input", 500);
      this.$dispatch("input", 500);
    },
    say() {
      this.$emit("say");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$bus.$emit("有人联系我");
    });
  }
};
</script>

<style scoped>
</style>