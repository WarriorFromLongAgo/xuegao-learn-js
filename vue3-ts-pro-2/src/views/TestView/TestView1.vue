<template>
  <div>
    <input type="button" @click="alterMsg" value="1111">
    <input type="button" @click="elLoading" value="1111">
    <input type="button" @click="elLoadingByQuery" value="1111">
  </div>
</template>
<script lang="ts">
import { ElLoading, ElMessage } from 'element-plus'

export default {
  setup() {
    const alterMsg = (msg: string) => {
      ElMessage.warning("asaa = " + msg)
    }
    const elLoading = () => {
      const loadingInstance = ElLoading.service({
        lock: true,
        text: '转一转',
        background: 'rgba(0, 0, 0, 0.1)'
      })
      let count = 0;
      setTimeout(() => {
        count++;
        console.log("count = ", count);
        if (count > 3) {
          loadingInstance.close()
        }
      }, 1000)
    }
    const elLoadingByQuery = () => {
      let loadingInstance
      try {
        loadingInstance = ElLoading.service({
          lock: true,
          text: '转一转',
          background: 'rgba(0, 0, 0, 0.1)'
        })
        // await queryXXXX(params)
        setTimeout(() => {
          loadingInstance.close()
        }, 3000)
      } catch (err) {
        console.log(err);
        throw (err)
      }
    }

    return {
      alterMsg, elLoading, elLoadingByQuery
    }
  }
}
</script>
<style lang="">
  
</style>