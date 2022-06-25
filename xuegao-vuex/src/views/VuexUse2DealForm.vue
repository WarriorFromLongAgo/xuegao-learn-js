<template>
  <div>
    <button @click="incr">incr</button>
    <input v-model="count">
  </div>
  <div>
    <input :value="obj.message" @input="updateMessage"> |
    <div>obj.message = {{obj.message}}</div>
  </div>
</template>

<script lang="ts" setup>
import {mapState, useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

// 访问 state
let count = computed(() => store.state.count)

// mapState, 最好只获取一些基础类型的参数
const storeStateFns = mapState(['count', 'name', 'age'])
let obj = mapState(['obj'])

function updateMessage(e: { target: { value: string } }) {
  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][updateMessage][e=", e)
  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][updateMessage]", e.target)
  console.log("=====================================================")
  store.commit('updateMessage', e.target.value)

  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][obj={}]", obj)
  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][obj.message={}]", obj.message)
  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][obj={}]", store.getters.getObj)

  console.log("[vue3-ts-pro-2][VuexUse2DealForm.vue][storeStateFns={}]", storeStateFns)
}


function incr() {
  // 使用 mutation
  store.commit('increment')
  // 使用 action
  store.dispatch('incrementAsync')
}

</script>

<style scoped>

</style>
