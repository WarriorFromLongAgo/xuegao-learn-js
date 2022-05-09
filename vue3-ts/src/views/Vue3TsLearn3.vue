<template>
    <div class="Vue3TsLearn3">
        <div>
            父组件的值：{{ component1Value }}<br>
            自己的组件：
            <Vue3TsLearnComponent1 v-model="component1Value" /><br>
            原生文本框：<input type="text" v-model="component1Value" />
        </div>
        <div>
            <Vue3TsLearnComponent3 /><br>
        </div>
    </div>

</template>

<script lang="ts">
import { ref } from 'vue'
import Vue3TsLearnComponent1 from './Vue3TsLearnComponent1.vue';
import Vue3TsLearnComponent3 from './Vue3TsLearnComponent3.vue';

export default {
    name: 'Vue3TsLearn3',
    components: {
        Vue3TsLearnComponent1,
        Vue3TsLearnComponent3
    },
    setup() {
        const value = ref('1')

        return {
            component1Value: value
        }
    }
}

</script>

<style scoped>
</style>