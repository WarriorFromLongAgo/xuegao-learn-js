 <template>
    <input :value="modelValue" @input="myInput"><br>
    组件内部值：{{ modelValue }}
</template>

<script lang="ts">

// https://www.jianshu.com/p/6c3f941abaf5
export default {
    name: 'component1Value',
    props:
    {
        modelValue: String
    },
    emits: ['input'],
    setup(props: { modelValue: string }, context: { emit: (arg0: string, arg1: any) => void }) {
        // 向父组件提交修改属性
        const myInput = (e: { target: { value: string } }) => {
            console.log(e)
            context.emit('update:modelValue', e.target.value)
        }

        return {
            myInput
        }
    }
}
</script>