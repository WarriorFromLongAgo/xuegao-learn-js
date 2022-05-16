<!-- 与组合API一起使用 -->

<template>
  <button @click="handleClick">点击emit-click事件</button>
  <button @click="handleOpen">点击emit-open事件</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

const Component = defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const result = props.message.split('') // 正确, 'message' 被声明为字符串
    // const filtered = props.message.filter(p => p.value) // 将引发错误: Property 'filter' does not exist on type 'string'

    const year = ref(2020)
    // const result2 = year.value.split('') // => Property 'split' does not exist on type 'number'

    const year2 = ref<string | number>('2020') // year's type: Ref<string | number>
    year2.value = 2020 // ok!
  }
})

const MyModal = defineComponent({
  setup() {
    const isContentShown = ref(false)
    const open = () => (isContentShown.value = true)
    return {
      isContentShown,
      open
    }
  }
})
</script>
<style scoped>
</style>