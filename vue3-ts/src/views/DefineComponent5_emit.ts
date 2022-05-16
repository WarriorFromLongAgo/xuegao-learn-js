import { defineComponent, reactive, computed } from 'vue'
export default defineComponent({
  name: 'icontext',
  components: {},
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  },
  emits: {
    change: null
  },
  setup(prop, context) {
    const handleClick = (type: String) => {
      context.emit('change', type)
    }
    return { handleClick }
  }
})