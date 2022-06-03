<template lang="html">
  <div class="flex-container">
    <div class="config-flex">config-flex
      <div class="config">

      </div>
      <div class="setup">

      </div>
    </div>
    <div class="people-flex">
      <div class="search">
        <el-select
            v-model="value"
            placeholder="Please enter a keyword"
        >
        </el-select>
      </div>
      <div class="search">

      </div>
    </div>
    <div class="chat-flex">
      <div class="wxlog-img-div">
        <img src="@/assets/wxlog.png" class="wxlog-img" alt="wxlogImg" loading="lazy"/>
      </div>
    </div>
  </div>


</template>
<script lang="ts" setup>


</script>
<style>
.flex-container {
  width: 100%;
  background-color: lightgrey;
  /* vh就是当前屏幕可见高度的1%，也就是说 
  height:100vh == height:100%;
  但是有个好处是当元素没有内容时候，设置height:100%该元素不会被撑开，
  但是设置height:100vh，该元素会被撑开屏幕高度一致。 */
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.config-flex {
  background-color: #2C2E32;
  width: 5%;
  height: 100vh;
  margin: 0 auto;
}

.people-flex {
  background-color: #E2E1E1;
  width: 10%;
  height: 100vh;
  margin: 0 auto;
}

.chat-flex {
  background-color: #F5F5F5;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
}

.wxlog-img-div {
  width: 144px;
  height: 144px;
  vertical-align: middle;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.wxlog-img {
  display: table-cell;
  width: 80px;
  height: 80px;
  border: 1px solid #beceeb;
  font-size: 118px;
  text-align: center;
  vertical-align: middle;
  border: none;
}
</style>