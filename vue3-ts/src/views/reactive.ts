import { defineComponent, reactive } from 'vue'

interface Book {
    title: string
    year?: number
}

export default defineComponent({
    name: 'HelloWorld',
    setup() {
        const book1 = reactive<Book>({ title: 'Vue 3 Guide' })
        // or
        const book2: Book = reactive({ title: 'Vue 3 Guide' })
        // or
        const book3 = reactive({ title: 'Vue 3 Guide' }) as Book
    }
})