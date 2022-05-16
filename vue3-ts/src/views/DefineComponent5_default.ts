import { defineComponent, PropType } from 'vue'

interface Book {
  title: string
  year?: number
}

const Component = defineComponent({
  props: {
    bookA: {
      type: Object as PropType<Book>,
      // 请务必使用箭头函数
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    bookB: {
      type: Object as PropType<Book>,
      // 或者提供一个明确的 this 参数
      default(this: void) {
        return {
          title: 'Function Expression'
        }
      },
      validator(this: void, book: Book) {
        return !!book.title
      }
    }
  }
})