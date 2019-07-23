<template>
  <div>
    <ab-navigation></ab-navigation>
    <router-view></router-view>
  </div>
</template>

<script>


import Navigation from './components/admin/shared/Navigation'
export default {
    name: "app",
    components: {
        abNavigation: Navigation
    }
}
</script>

<style>

</style>
