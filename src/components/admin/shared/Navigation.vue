<template>
    <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            hide-overlay
            stateless
            :style="{ float: 'left' }"
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>
                    <router-link :to="'/admin/' + item.title.toLowerCase()"
                                 tag="v-list-tile"
                                 v-for="item in items"
                                 :key="item.title"
                                 @click="menuClicked(item.title)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </router-link>
        </v-list>
    </v-navigation-drawer>
</template>


<script>
    export default {
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'Apartments', icon: 'question_answer' },
                    { title: 'Bookings', icon: 'question_answer' }
                ],
                mini: true,
                right: null
            }
        },
        methods: {
            menuClicked(title) {
                console.log(title);
            }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");
</style>