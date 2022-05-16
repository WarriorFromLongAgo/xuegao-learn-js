import { defineComponent } from 'vue'

const Component = defineComponent({
  data() {
    return {
      count: "0"
    }
  },
  mounted() {
    const result = this.count.split('') // => Property 'split' does not exist on type 'number'
  }
})