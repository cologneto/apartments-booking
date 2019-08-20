<template>
    <div>
        <app-navigation></app-navigation>
        <router-view></router-view>
    </div>

</template>

<script>
    import Navigation from './shared/Navigation'

    export default {
        name: "AdminHome",
        components: {
            appNavigation: Navigation
        }
    }
</script>

<style scoped>

</style>