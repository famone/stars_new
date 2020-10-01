import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueTyperPlugin from 'vue-typer'



import 'swiper/css/swiper.css'

Vue.use(VueTyperPlugin)
Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})



router.beforeEach((to, from, next) => {
   store.dispatch('goods/doPreload')

   setTimeout(function(){
                      next()
  }, 400);
})