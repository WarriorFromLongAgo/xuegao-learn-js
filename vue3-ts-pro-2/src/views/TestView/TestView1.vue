<template>
  <div>
    <input type="button" @click="alterMsg" value="1111">
    <input type="button" @click="elLoading" value="1111">
    <input type="button" @click="elLoadingByQuery" value="1111">
    <input type="button" @click="getLoading" value="1111">
    <input type="button" @click="elLoadingByQueryV2" value="1111">
    <input type="button" @click="elLoadingByQueryError" value="1111">
  </div>
</template>
<script lang="ts">
import { ElLoading, ElMessage } from 'element-plus'
import { openLoading, closeLoading } from "@/utils/loading"
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ref } from 'vue'

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

    let refCount = ref(0);
    const elLoadingByQueryError = () => {
      // 请忽视下面的两行
      let loadingInstance: LoadingInstance;
      loadingInstance = ElLoading.service({
        lock: true,
        text: '转一转',
        background: 'rgba(0, 0, 0, 0.1)'
      })
      try {
        refCount.value++;
        console.log(refCount.value);
        if (refCount.value == 3) {
          throw new Error('Whoops!');
        }
        setTimeout(() => {
          loadingInstance.close()
        }, 1000)
      } catch (e: unknown) {
        loadingInstance.close();
        console.log("catch", e);
      }
    }


    return {
      alterMsg, elLoading, elLoadingByQuery, getLoading, elLoadingByQueryV2, elLoadingByQueryError
    }
  }
}
</script>
<style lang="">
  
</style>