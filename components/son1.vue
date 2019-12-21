<template>
  <div class="son1">
    son1:{{value}}
    <button @click="changeVal">儿子修改</button>
    <Grandson1 :value="value" @say="say"></Grandson1>
  </div>
</template>

<script>
import Grandson1 from "./Grandson1.vue";
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    ary: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeVal() {
      this.ary.push(1);
      this.$emit("input", 200);
    },
    say(value) {
      console.log("你好: " + value);
    }
  },
  components: {
    Grandson1
  }
};
</script>

<style scoped>
.son1 {
  margin: 10px;
  border: 1px solid green;
}
</style>