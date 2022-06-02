<template>
  <div class="login">
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请入输入用户名" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请入输入密码" show-password />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { imLogin } from '@/request/http/axios5/testHttp';
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    let count = ref(0)
    const form = reactive({
      username: '',
      password: '',
    })

    function increment(): number {
      count.value++
      return count.value
    }

    const onSubmit = () => {
      console.log("submit", form)
      imLogin().then(resp => {
        console.log("resp = ", resp);
        // 如果值不为空，那么就是true
        if (resp.data) {
          console.log("resp.data = true ", resp.data);
        } else {
          console.log("resp.data = fasle ", resp.data);
        }
        if (resp.code === 0 && resp.msg === "" && resp.data) {
          console.log("登录成功");

          // 了解一下 router 到底是啥
          if (form.username === "name") {
            router.push({
              name: 'ImMainViewName',
              params: form
            })
          } else {
            router.push({
              path: 'ImMainView',
              query: form
            })
          }
        } else {
          console.log("登录失败");
          onReset();
        }
      })

    }
    const onReset = () => {
      form.username = ''
      form.password = ''
    }
    return {
      form, onSubmit, onReset, increment
    }
  }
}

</script>

<style>
body {
  margin: 0;
}

.login {
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
}
</style>
