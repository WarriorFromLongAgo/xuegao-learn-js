<template lang="html">
    <div>
        
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
const router = useRoute()

if (router.name === 'ImMainViewName') {
    console.log('ImMainViewName')
} else {
    console.log('ImMainView')
}
console.log("ImMainView router = ", router);
console.log("ImMainView router.query = ", router.query);
console.log("ImMainView router.params = ", router.params);
</script>
<style lang="">
    
</style>