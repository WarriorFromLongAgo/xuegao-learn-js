import { ref, watch } from 'vue'

export default function myCount() {
    //创建定时器增加count值
    const count = ref(1);
    setInterval(() => {
        count.value++
    }, 1000)

    // watch(count, () => {
    //     console.log(" Vue3TsLearn.ts count = ", count);
    // })

    return {
        vue3TsLearnTsCountCount: count
    }
}