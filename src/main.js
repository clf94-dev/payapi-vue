import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'  

import Home from './components/pages/Home.vue'
import Pricing from './components/pages/Pricing.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate';


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes=[
  {path:'/', component: Home},
  {path:'/home', component: Home},
  {path:'/pricing', component: Pricing},
  {path:'/about', component: About },
  {path:'/contact', component: Contact }
];

const router=new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,render: h => h(App),
}).$mount('#app')
