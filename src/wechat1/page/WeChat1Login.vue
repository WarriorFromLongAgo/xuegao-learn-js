<template>
  <div class="login">
    <div class="label"></div>
    <div class="header">
      <img id="headMenu" src="./head.jpg" class="avatar" alt="alt"/>
    </div>
    <div class="loginInfo">
      <input class="account" v-model="currentUser.nickname" placeholder="昵称"/>
      <input class="account" maxlength="14" oninput="value=value.replace(/[^\w\.\s\/]/ig,'')"
             v-model="currentUser.username" placeholder="账号"/>
    </div>
    <div class="loginButton" @click="login">
      <span>登录</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {reactive} from 'vue'
import {useRouter} from "vue-router";
import {UserInfo} from '@/wechat1/model/UserInfo';
import {trim} from "@/utils/stringutil"

const router = useRouter()

let currentUser: UserInfo = reactive({
  username:
      localStorage.getItem("username") === null ? "" : localStorage.getItem("username"),
  nickname:
      localStorage.getItem("nickname") === null ? "" : localStorage.getItem("nickname"),
  avatar:
      localStorage.getItem("avatar") === null ? "" : localStorage.getItem("avatar")
}) as UserInfo

function login() {
  currentUser.username = trim(currentUser.username)
  currentUser.nickname = trim(currentUser.nickname)
  console.log("[vue3-ts-pro-2][WeChat1Login.vue][currentUser]", currentUser)
  let username: string = currentUser.username;
  let nickname: string = currentUser.nickname;
  handleLogin({username, nickname})
      .then((res) => {
            console.log("[vue3-ts-pro-2][WeChat1Login.vue][res]", res)
            router.push({
              name: "wechat1ChatIndex",
              params: {
                // ...currentUser
                username, nickname
              },
              query: {
                username, nickname
              }
            })
          }, (error) => {
            console.log("[vue3-ts-pro-2][WeChat1Login.vue][error]", error)
          }
      )
      .finally(() => {
        console.log("finally")
      });
}

function handleLogin(input: { username: string, nickname: string, inputStr?: string }) {
  let username = input.username;
  let nickname = input.nickname;
  let resolveStr = input.inputStr = "input resolveStr"
  return new Promise((resolve, reject) => {
    resolve({username, nickname, resolveStr})
    reject(new Error('reject apiUrl === undefined'))
  })
}

</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 1s;
}

.login {
  width: 280px;
  height: 400px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: #F5F5F5;
  border-radius: 3px;
  text-align: center;

  .header {
    margin-top: 70px;
    margin-bottom: 30px;

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
  }

  .loginInfo {
    margin: 0 auto;

    .account {
      background-image: url('./account.svg');

      &:focus {
        background-image: url('./account-choice.svg');
      }
    }

    .password {
      background-image: url('./password.svg');

      &:focus {
        background-image: url('./password-choice.svg');
      }
    }

    input {
      font-size: 16px;
      width: 135px;
      padding: 4px 15px 4px 30px;
      margin-bottom: 10px;
      border-bottom: 1px solid #D6D6D6;
      font-family: inherit;
      overflow: hidden;
      background-color: #F5F5F5;
      background-repeat: no-repeat;
      background-position: center;
      background-position-x: 5px;
      background-size: 15px 15px;

      &:focus {
        border-bottom-color: #1aad19;
        outline: 0;
        // -webkit-box-shadow: inset 0 1px 1px rgba(26,173,25,.075),0 0 8px rgba(26,173,25,.6)
        // box-shadow: inset 0 1px 1px rgba(26,173,25,.075),0 0 8px rgba(26,173,25,.6)
      }
    }
  }

  .select {
    margin-top: 5px;
  }

  .loginButton {
    margin: 0 auto;
    margin-top: 35px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
    background-color: #1aad19;
    cursor: pointer;
    border-radius: 1px;

    &:hover {
      background: rgb(18, 150, 17);
    }
  }
}
</style>
