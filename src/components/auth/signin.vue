<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form action="">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="email"
                                                label="Mail"
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12>
                                        <v-btn type="submit" @click.prevent="onSignIn">Sign In</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        /* eslint-disable */
        name: "signup",
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        computed: {
            comparePasswords() {
                return this.password !== this.confirmPassword ? 'Passwords do not match' : '';
            }
        },
        methods: {
            onSignIn () {
                const formData = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('signIn', {email: formData.email, password: formData.password})
            }
        }
    }

</script>

<style scoped>

</style>