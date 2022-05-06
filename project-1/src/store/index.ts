import { InjectionKey } from 'vue'
import { createStore, useStore as vuxStore, Store } from 'vuex'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0
    },
    mutations: {
        increment(state: State) {
            console.log("increment");
            state.count++
        },
        setCount(state: State, count: number) {
            console.log("setCount");
            state.count = count
        },
        getCount(state: State) {
            console.log("getCount");
            return state.count
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    console.log('useStore');
    return vuxStore(key)
}