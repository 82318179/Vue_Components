<template>
  <div class="Parent">
    Parent:{{money}}--{{ary}}
    <son1 :value="money" :ary="ary" @input="(value)=>money =value"></son1>
    <!-- <son1 v-model="money"></son1> -->
  </div>
</template>

<script>
import son1 from "./son1.vue";
export default {
  data() {
    return {
      money: 100,
      ary: [1]
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