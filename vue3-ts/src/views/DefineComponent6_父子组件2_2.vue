<template>
  <!-- https://www.jianshu.com/p/efd76e4ca4e1 -->
  <emiter @click="onClick" @open="onOpen"></emiter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Emiter from "@/components/Emiter.vue";
export default defineComponent({
  components: {
    Emiter,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      console.log("click me!");
    },
    onOpen() {
      console.log("open me!");
    },
  },
});
</script>
<style scoped>
</style>