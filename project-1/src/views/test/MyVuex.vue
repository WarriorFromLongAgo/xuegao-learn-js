<template>

    <h1>{{ msg }}</h1>

    <button type="button" @click="count++"> count is {{ count }}</button>

</template>

<script lang="ts">
import { defineProps, withDefaults, defineEmits, computed, ref } from "vue"

defineProps<{ // 采用ts专有声明，无默认值
    msg: string,
    num?: number
}>()
// 采用ts专有声明，有默认值
interface Props {
    msg?: string
    labels?: string[]
}
const props = withDefaults(defineProps<Props>(), {
    msg: 'hello',
    labels: () => ['one', 'two']
})

defineProps({ // 非ts专有声明
    msg: String,
    num: {
        type: Number,
        default: ''
    }
})
// ————————————————
// 版权声明：本文为CSDN博主「Mosowe」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/skyblacktoday/article/details/120879677

export default {
    name: "MyVuex",
    components: {},
};
console.log("MyVuex");
</script>



<style scoped>
</style>