import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'

// 为 store state 声明类型
export interface State {
    countState: number,
    count: number,
    double: number,
    todos: [{ id: number, text: string, done: boolean }]
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const SOME_MUTATION = 'SOME_MUTATION'

export default createStore<State>({
    // 开启严格模式，仅需在创建 store 的时候传入 strict: true：
    strict: true,
    state: {
        countState: 0,
        count: 0,
        double: 0.1,
        todos: [
            {id: 1, text: '111', done: true},
            {id: 2, text: '222', done: false}
        ],
        obj: {
            message: "default"
        }
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            // return getters.doneTodos.length
            return state.todos.length
        },
        getTodoById: (state) => (id: number) => {
            return state.todos.find(todo => todo.id === id)
        },
        getObj(state) {
            return state.obj
        },
    },
    mutations: {
        increment(state) {
            console.log("[vue3-ts-pro-2][index.ts][={}]", "increment")
            state.count++
        }
        ,
        // 提交载荷（Payload）
        incrementV2(state, n
            :
            number
        ) {
            state.count += n
        }
        ,
        incrementV3(state, payload) {
            state.count += payload.amount
        }
        ,
        // 我们可以使用 ES2015 风格的计算属性命名功能
        // 来使用一个常量作为函数名
        [SOME_MUTATION](state) {
            // 修改 state
        }
        ,
        updateMessage(state, message) {
            console.log("[vue3-ts-pro-2][index.ts][message]", message)
            console.log("[vue3-ts-pro-2][index.ts][state.obj.message]", state.obj.message)
            state.obj.message = message
            console.log("[vue3-ts-pro-2][index.ts][state.obj.message]", state.obj.message)
        }
    }
    ,
    actions: {
        // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit
        // 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，
        // 你就知道 context 对象为什么不是 store 实例本身了。
        increment(context) {
            context.commit('increment')
        }
        ,
        incrementV2({commit}) {
            commit('increment')
        }
        ,
        incrementAsync({commit}) {
            console.log("[vue3-ts-pro-2][index.ts][={}]", "incrementAsync")
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
        ,
        // checkout ({ commit, state }, products) {
        //     // 把当前购物车的物品备份起来
        //     const savedCartItems = [...state.cart.added]
        //     // 发出结账请求
        //     // 然后乐观地清空购物车
        //     commit(types.CHECKOUT_REQUEST)
        //     // 购物 API 接受一个成功回调和一个失败回调
        //     shop.buyProducts(
        //         products,
        //         // 成功操作
        //         () => commit(types.CHECKOUT_SUCCESS),
        //         // 失败操作
        //         () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        //     )
        // }

        // 你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
        // actionA ({ commit }) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             commit('someMutation')
        //             resolve()
        //         }, 1000)
        //     })
        // }
        // actionB ({ dispatch, commit }) {
        //     return dispatch('actionA').then(() => {
        //         commit('someOtherMutation')
        //     })
        // }

        // 假设 getData() 和 getOtherData() 返回的是 Promise
        // async actionA ({ commit }) {
        //     commit('gotData', await getData())
        // },
        // async actionB ({ dispatch, commit }) {
        //     await dispatch('actionA') // 等待 actionA 完成
        //     commit('gotOtherData', await getOtherData())
        // }
        // 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
    }
    ,
    modules: {}
})
