import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ourRoutes from './our-routes.js';

Vue.config.productionTip = false

Vue.use(VueRouter);


const router = new VueRouter({
  routes:ourRoutes // short for `routes: routes`
  })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
