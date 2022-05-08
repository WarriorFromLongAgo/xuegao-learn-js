<template>
    <el-form>
        <el-form-item label="用户名">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
console.log('xuegaoLogin.vue');
export default {
    name: 'xuegaoLogin',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style>
</style>
