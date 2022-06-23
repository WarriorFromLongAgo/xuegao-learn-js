import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 0,
        todos: [
            {id: 1, text: '111', done: true},
            {id: 2, text: '222', done: false}
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id: number) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 提交载荷（Payload）
        incrementV2(state, n: number) {
            state.count += n
        },
        incrementV3 (state, payload) {
            state.count += payload.amount
        }
    },
    actions: {},
    modules: {}
})
