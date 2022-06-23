<template>
  <div>
    <input type="button" @click="incr">
    <Counter></Counter>
  </div>
</template>


<script lang="ts" setup>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

function incr() {
  console.log("incr")
}

// 创建一个 Counter 组件
// const Counter = defineComponent({
//   template: `
//     <div>{{ count }}</div>`,
//   computed: {
//     count() {
//       return this.$store.state.count
//     }
//   }
// })

// computed: mapState({
//   // 箭头函数可使代码更简练
//   count: state => state.count,
//   // 传字符串参数 'count' 等同于 `state => state.count`
//   countAlias: 'count',
//   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//   countPlusLocalState (state) {
//     return state.count + this.localCount
//   }
// })

// mapState 辅助函数
// computed: mapState([
//   // 映射 this.count 为 store.state.count
//   'count'
// ])

// 对象展开运算符
// computed: {
//   localComputed () { /* ... */ },
//   // 使用对象展开运算符将此对象混入到外部对象中
// ...mapState({
//     // ...
//   })
// }


// 通过属性访问
// store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

// store.getters.doneTodosCount // -> 1

// store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }

// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
// computed: {
//   // 使用对象展开运算符将 getter 混入 computed 对象中
// ...mapGetters([
//     'doneTodosCount',
//     'anotherGetter',
//     // ...
//   ])
// }

// 如果你想将一个 getter 属性另取一个名字，使用对象形式：
// ...mapGetters({
//   // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
//   doneCount: 'doneTodosCount'
// })


// store.commit('increment')
// store.commit('incrementV2', 10)
// store.commit('incrementV3', {
//   amount: 10
// })
// store.commit({
//   type: 'incrementV3',
//   amount: 10
// })




</script>

<style scoped>

</style>
