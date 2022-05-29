<template>
  <div>
    <div>
      <input type="button" @click="getTest1Func" value="getTest1">
    </div>
    <div>
      <!-- <input type="button" @click="getAsync1" value="getAsync1"> -->
    </div>
    <div>
      <input type="button" @click="postTest1Func" value="postTest1">
    </div>
  </div>
</template>
<script lang="ts">
import { login, loginAsync, getTest1, postTest1 } from '@/request/http/axios5/testHttp';

export default {
  setup() {
    const getTest1Func = () => {
      let resp = getTest1();
      console.log("resp getTest1 = ", resp);
    }
    const postTest1Func = () => {
      let resp = postTest1({
        username: 'test',
        password: '123456'
      });
      console.log("resp postTest1 = ", resp);
    }
    return {
      getTest1Func, postTest1Func
    }
  }
}
</script>