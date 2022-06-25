<template>
<div>

</div>
</template>

<script lang="ts" setup>
import { mapActions } from 'vuex'

// Action 通过 store.dispatch 方法触发：
// store.dispatch('increment')

// 以载荷形式分发
// store.dispatch('incrementAsync', {
//   amount: 10
// })

// 以对象形式分发
// store.dispatch({
//   type: 'incrementAsync',
//   amount: 10
// })

// ...mapActions([
//   'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
//
//   // `mapActions` 也支持载荷：
//   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
// ]),
// ...mapActions({
//   add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
// })

// actionA ({ commit }) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       commit('someMutation')
//       resolve()
//     }, 1000)
//   })
// }

// store.dispatch('actionA').then(() => {
//   // ...
// })

</script>

<style scoped>

</style>
