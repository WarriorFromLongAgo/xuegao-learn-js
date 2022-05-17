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
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({
      username: '',
      password: '',
    })

    const onSubmit = () => {
      console.log("submit", form)
    }
    const onReset = () => {
      form.username = ''
      form.password = ''
    }
    return {
      form, onSubmit, onReset
    }
  }
}

</script>
