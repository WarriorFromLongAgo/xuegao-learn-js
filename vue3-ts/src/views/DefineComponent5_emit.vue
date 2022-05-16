<template>
  <div>
    Vue3TsLearnComponent3 asdasda sa a s
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineEmits } from 'vue'

const emit = defineEmits(['change'])
emit('change', '123')
</script>

<style scoped>
</style>