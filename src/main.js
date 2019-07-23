import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { routes } from "./routes";

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
   router,
}).$mount('#app')
