<template>
    <div>
        <header-view></header-view>
        <router-view></router-view>
    </div>
</template>

<script>
    import headerView from './components/header.vue'
    export default {
        name: 'app',
        components:{
            headerView
        }
    }
</script>
<style scoped>
</style>
