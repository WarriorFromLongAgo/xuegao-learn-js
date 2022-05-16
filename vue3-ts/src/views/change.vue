<template>
    <input type="text" @change="handleChange" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        // `evt` 将会是 `any` 类型
        const handleChange = (evt: any) => {
            console.log(evt.target.value) // 此处 TS 将抛出异常
        }
        const handleChangeV2 = (evt: Event) => {
            console.log((evt.target as HTMLInputElement).value)
        }
        return { handleChange, handleChangeV2 }
    }
})
</script>