<template>
  <div>
    <input type="button" @click="alterMsg" value="1111">
    <input type="button" @click="elLoading" value="1111">
    <input type="button" @click="elLoadingByQuery" value="1111">
    <input type="button" @click="getLoading" value="1111">
    <input type="button" @click="elLoadingByQueryV2" value="1111">
  </div>
</template>
<script lang="ts">
import { ElLoading, ElMessage } from 'element-plus'
import { openLoading, closeLoading } from "@/utils/loading"
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

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
      loadingInstance.close()
    }
    const elLoadingByQuery = () => {
      let loadingInstance: { close: () => void; };
      // let loadingInstance;
      loadingInstance = ElLoading.service({
        lock: true,
        text: '转一转',
        background: 'rgba(0, 0, 0, 0.1)'
      })
      console.log("loadingInstance", loadingInstance);
      // await queryXXXX(params)
      setTimeout(() => {
        loadingInstance.close()
      }, 3000)
    }

    const getLoading = () => {
      openLoading()
      setTimeout(() => {
        closeLoading()
      }, 3000)
    }

    const elLoadingByQueryV2 = () => {
      let loadingInstance: LoadingInstance
      // let loadingInstance;
      loadingInstance = ElLoading.service({
        lock: true,
        text: '转一转',
        background: 'rgba(0, 0, 0, 0.1)'
      })
      console.log("loadingInstance", loadingInstance);
      // await queryXXXX(params)
      setTimeout(() => {
        loadingInstance.close()
      }, 3000)
    }


    return {
      alterMsg, elLoading, elLoadingByQuery, getLoading, elLoadingByQueryV2
    }
  }
}
</script>
<style lang="">
  
</style>