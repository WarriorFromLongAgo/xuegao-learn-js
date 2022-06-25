<template>
  <div>
    <button @click="incr">incr</button>
  </div>
  <div>
    <input v-model="count">
    <div>{{doneTodosCount}}</div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

// 访问 state
let count = computed(() => store.state.count)

// 访问 getters
let doneTodosCount = computed(() => store.getters.doneTodosCount)

function incr() {
  // 使用 mutation
  store.commit('increment')
  // 使用 action
  store.dispatch('incrementAsync')
}


</script>

<style scoped>

</style>
