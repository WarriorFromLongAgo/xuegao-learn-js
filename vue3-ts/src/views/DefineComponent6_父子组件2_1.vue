<template>
<!-- https://www.jianshu.com/p/efd76e4ca4e1 -->
  <button @click="handleClick">点击emit-click事件</button>
  <button @click="handleOpen">点击emit-open事件</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: {
    click: null,//click事件没有检验
    open: (value) => {
      if (typeof value === "string") {
        return true;
      } else {
        return false;
      }
    },
  },
  setup(props, { emit }) {
    const handleClick = function () {
      emit("click");
    };
    const handleOpen = function () {
      emit("open", 1);
    };
    return {
      handleClick,
      handleOpen,
    };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style scoped>
</style>