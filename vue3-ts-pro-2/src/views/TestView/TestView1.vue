<template>
  <div>
    <input type="button" @click="alterMsg" value="1111">
  </div>
</template>
<script lang="ts">
import { ElMessage } from 'element-plus'

export default {
  setup() {

    const alterMsg = (msg: string) => {
      ElMessage.warning("asaa = " + msg)
    }

    return {
      alterMsg
    }
  }
}
</script>
<style lang="">
  
</style>