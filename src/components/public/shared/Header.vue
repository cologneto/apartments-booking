<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <router-link :to="'/signup'"
                             tag="v-btn">
                    Sign Up
                </router-link>
                <router-link :to="'/signin'"
                             tag="v-btn">
                    Sign In
                </router-link>
                <!--<v-btn text>Sign Up</v-btn>-->
                <!--<v-btn text>Sign In</v-btn>-->
                <v-btn text>Logout</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>