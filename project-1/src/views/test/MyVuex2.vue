<template>

    <h1>showCount = {{ showCount }}</h1>

    <button type="button" @click="incrBtn()"> 新增 count is {{ count }}</button>

</template>

<script lang="ts">
import { ref, computed } from "vue"
// 自己的 store
import { useStore } from "@/store"

const store = useStore()
console.log("store is ", store);

const count = ref(0)
console.log("count is ", count);

const showCount = ref(0)
console.log("showCount is ", showCount);

export default {
    name: "MyVuex2",
    components: {},
    setup() {
        const incrBtn = computed(() => {
            store.commit("setCount", count.value + 1)
            console.log("count is ", count.value);
        });
        const showCountComputed = computed(() => {
            // return store.state.count
            // return store.getters.getCount
            console.log("showCountComputed is ", showCount.value);
            return store.getters["getCount"]
        })
    }
};
console.log("MyVuex2");
</script>



<style scoped>
</style>