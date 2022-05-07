<template>
    <h1>show = {{ show }}</h1>
    <h1>twiceTheCounter = {{ twiceTheCounter }}</h1>
    <button type="button" @click="incrBtn"> 新增 counter is {{ counter }}</button>
</template>

<script lang="setup">
import { ref, computed } from "vue"

const counter = ref(0)
console.log("count is ", counter);
console.log("count.value is ", counter.value);

const twiceTheCounter = computed(() => counter.value * 2)
counter.value++
console.log(counter.value) // 1
console.log(twiceTheCounter.value) // 2

console.log("MyVue3-setup");

</script>

<style scoped>
</style>