<template>
  <div>
    Vue3TsLearnComponent3 asdasda sa a   s 
  </div>
</template>

<script lang="ts">

import { toRefs } from 'vue'
import { toRef } from 'vue'

export default {
  // props: {
  //   title: String
  // },
  // setup(props: { title: string }, context: { emit: (arg0: string, arg1: any) => void }) {
  setup(
    // props: { title: string }
    // , { attrs, slots, emit, expose }
  ) {
    // console.log("context, ", context)
    // Attribute (非响应式对象，等同于 $attrs)
    // console.log(context.attrs)
    // 插槽 (非响应式对象，等同于 $slots)
    // console.log(context.slots)
    // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit)
    // 暴露公共 property (函数)
    // console.log(context.expose)
    console.log(" Vue3TsLearnComponent3 ");
  //   console.log("props ,", props)
  //   console.log("props.title ,", props.title)

  //   const { title } = toRefs(props)
  //   console.log(title.value)

  //   const title2 = toRef(props, 'title')
  //   console.log(title2.value)
  }
}

</script>

<style scoped>
</style>