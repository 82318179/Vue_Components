<template>
  <div class="Parent">
    Parent:{{money}}
    <son1 :value="money" @input:value="(value)=>money =value"></son1>
  </div>
</template>

<script>
import son1 from "./son1.vue";
export default {
  data() {
    return {
      money: 100
    };
  },
  components: {
    son1
  }
};
</script>

<style scoped>
.Parent {
  border: 1px solid #606060;
}
</style>