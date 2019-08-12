<template>
    <div>
        <ab-navigation></ab-navigation>
        <router-view></router-view>
    </div>

</template>

<script>
    import Navigation from './shared/Navigation'

    export default {
        name: "AdminHome",
        components: {
            abNavigation: Navigation
        }
    }
</script>

<style scoped>

</style>