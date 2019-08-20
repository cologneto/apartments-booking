import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    /* eslint-disable */
    state: {
        idToken: null,
        userId: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token
            state.userId = userData.userId
        }
    },
    actions: {
        signUp({commit}, authData) {
            firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
                .then(data => {
                    console.dir(data)
                    commit('authUser', {
                        token: data.user.ra,
                        userId: data.user.uid
                    })
                }).catch(error => alert(error))
        },
        signIn({commit}, authData) {
            firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
                .then(data => {
                    console.dir(data)
                    commit('authUser', {
                        token: data.user.ra,
                        userId: data.user.uid
                    })
                }).catch(error => alert(error))
        },
        storeUser({commit}, userData) {
            firebase.database().ref('users/' + userData.userId).set({
                email: userData.email,
                imageUrl: ''
            })
        }
    },
    getters: {

    }
});
