<template>
  <div class="container">
    <!-- form 表单 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登录 注册 -->
        this is LoginRegist
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegist",
  components: {},
};
console.log("LoginRegist");
</script>

<style>
.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  left: 75%;
  width: 44%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}
</style>