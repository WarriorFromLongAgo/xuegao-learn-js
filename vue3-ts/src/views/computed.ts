import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    name: 'CounterButton',
    setup() {
        let count = ref(0)

        // 只读
        const doubleCount = computed(() => count.value * 2)

        // const result = doubleCount.value.split('') // => Property 'split' does not exist on type 'number'
    }
})