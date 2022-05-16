<template>
  <div>
    DefineComponent6_父子组件
  </div>
</template>

<script setup lang='ts'>
import { defineComponent, ref } from 'vue'
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
const app = defineComponent({
  components: {
    MyModal
  },
  template: `
    <button @click="openModal">Open from parent</button>
    <my-modal ref="modal" />
  `,
  setup() {
    const modal = ref()
    const openModal = () => {
      modal.value.open()
    }
    // const modal = ref<InstanceType<typeof MyModal>>()
    // const openModal = () => {
    //   modal.value?.open()
    // }
    return { modal, openModal }
  }
})
</script>

<style scoped>
</style>