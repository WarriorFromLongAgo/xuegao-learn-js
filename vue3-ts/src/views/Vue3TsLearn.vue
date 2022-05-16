<template>
    <div class="Vue3TsLearn">
        <h1>{{ msg }}</h1>
        <h1>setupMsg = {{ setupMsg }}</h1>
        <!-- <h1> propsMsg.user = {{ user }}</h1> -->
        <h1>{{ count }}</h1>
        <h1>{{ refCount }}</h1>
        <h1>{{ countComputed }}</h1>
        <h1>{{ refCountComputed }}</h1>
        <h1>vue3TsLearnTsCountCount = {{ vue3TsLearnTsCountCount }}</h1>
    </div>
    <div>
        <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </div>
    <div id="event-with-method">
        <!-- `greet` 是在下面定义的方法名 -->
        <button @click="greet('111')">Greet</button>
    </div>
    <div>
        <button @click="dealInputValue(inputValue)">{{ inputValue }}</button>
    </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { ref } from 'vue'
import { watch } from 'vue'
import Vue3TsLearnTsCount from './Vue3TsLearn';

export default {
    // components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
    // 父组件给子组件传值
    // props: {
    //     user: {
    //         type: String,
    //         required: true
    //     }
    // },

    name: "Vue3TsLearn",
    setup(
        // setupMsg: string
        // , propsMsg: { user: string; }
        // , props: {
        //     user: {
        //         type: String,
        //         required: true
        //     }
        // }
    ) {
        let setupMsg = "setupMsg"
        // propsMsg.user = "propsMsgUser"

        onMounted(() => {
            console.log("onMounted");
        })

        let count = 1;
        setInterval(() => {
            count++
        }, 1000)

        //创建定时器增加count值
        let refCount = ref(1);
        setInterval(() => {
            refCount.value++
        }, 1000)

        // 监听简单的对象
        // watch(refCount, (newValue, oldValue) => {
        //     console.log("watch = newValue = ", newValue, " oldValue = ", oldValue);
        //     console.log("watch = refCount = ", refCount.value);
        // });

        // const demo = reactive({
        //     name: '前端小玖',
        //     nickName: '小玖',
        //     soulmate: {
        //         name: '',
        //         nickName: ''
        //     }
        // })
        const refObject = ref({
            name: 'xuegao',
            nickName: 'xuegaoNick',
            soulmate: {
                name: '',
                nickName: ''
            }
        })
        // watch(refObject, (newValue, oldValue) => {
        //     console.log('watch refObject 已触发 = ', newValue, oldValue)
        // })
        // watch(() => refObject.value.name, (newValue, oldValue) => {
        //     console.log('watch refObject 已触发 = ', newValue, oldValue)
        // })
        // 只有当 demo 的子属性发生变更时才会触发 watch 方法。孙属性，曾孙属性... 发生变更都不会触发 watch 方法。
        // 也就是说，当你修改 demo.soulmate.name 或者 demo.soulmate.nickName 时是不会触发 watch 方法的。
        // watch(() => ({ ...refObject }), (newValue, oldValue) => {
        //     console.log('watch 已触发', newValue, oldValue)
        // })
        // 监听对象的所有属性  
        // watch(() => refObject, (newValue, oldValue) => {
        //     console.log('watch 已触发', newValue, oldValue)
        // }, { deep: true })
        // // 组合监听
        // const nums = ref(9)
        // const demo = reactive({
        //     name: '前端小玖',
        //     nickName: '小玖',
        //     soulmate: {
        //         name: '',
        //         nickName: ''
        //     }
        // })
        // watch([() => demo.name, nums], ([newName, newNums], [oldName, oldNums]) => {
        //     console.log('watch 已触发: name', oldName, newName)
        //     console.log('watch 已触发: nums', oldNums, newNums)
        // })

        let countComputed = computed(() => count * 2);
        let refCountComputed = computed(() => refCount.value * 2);

        let msg = "Mr liu";

        let { vue3TsLearnTsCountCount } = Vue3TsLearnTsCount();
        console.log("Vue3TsLearnTsCountCount = ", vue3TsLearnTsCountCount);

        let evenNumbers = computed(() => [1, 2, 3, 4, 5]);

        const greet = (string: string) => {
            console.log("greet = ", string);
        }

        const inputValue = ref(0)
        const dealInputValue = (inputValue: number) => {
            console.log("dealInputValue = ", inputValue++);
        }

        return {
            msg: msg, count: count, refCount: refCount, countComputed: countComputed,
            refCountComputed: refCountComputed, vue3TsLearnTsCountCount: vue3TsLearnTsCountCount,
            setupMsg: setupMsg, evenNumbers: evenNumbers, greet, inputValue, dealInputValue
        };
    },
    // setup生命周期
    beforeCreate() {
        console.log("beforeCreate");
    }
};

</script>

<style scoped>
</style>