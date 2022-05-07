<template>
    <h1>show = {{ show }}</h1>
    <button type="button" @click="incrBtn(showCount)"> incrBtn {{ showCount }}</button>
    <button type="button" @click="incrBtn2()"> incrBtn2 {{ showCount2 }}</button>
</template>

<script lang="ts">
export default {
    name: "MyVue3",
    components: {},
    data() {
        // vue中的数据源
        return {
            show: 'Hello Vue3!!',
            showCount: 0,
            showCount2: 0
        }
    },
    methods: {
        incrBtn: function (showCount: number) {
            console.log("incrBtn showCount is ", showCount);
            console.log("incrBtn showCount is ", showCount++);
            console.log("incrBtn showCount is ", showCount);
        },
        // incrBtn2: function () {
        //     console.log("incrBtn showCount is ", this.showCount2);
        //     this.showCount2++;
        //     console.log("incrBtn showCount is ", this.showCount2);
        // }
    }
};
console.log("MyVue3");

</script>

<style scoped>
</style>