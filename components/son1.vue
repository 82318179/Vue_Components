<template>
  <div class="son1">
    son1:{{value}}
    <button @click="changeVal">儿子修改</button>
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
    changeVal() {
      this.$emit("input:value", 200);
    }
  }
};
</script>

<style scoped>
.son1 {
  margin: 10px;
  border: 1px solid green;
}
</style>