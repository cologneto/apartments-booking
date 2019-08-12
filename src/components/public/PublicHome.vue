<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './shared/Header'
    export default {
        name: "PublicHome",
        components: {
            appHeader: Header
        }
    }
</script>

<style scoped>

</style>