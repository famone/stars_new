<template>
  <div id="app">

    <preloader :class="{acPre: preload}" />

    <Header />

      <router-view></router-view>

    <Footer />
      
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import './assets/css/style.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import preloader from './components/preloader.vue'


export default {
  components: { Header, Footer, preloader },
   data(){
    return{
     
    }
   },
   created() {
      this.$store.dispatch('goods/loadCases') 
      this.$store.dispatch('goods/loadServices')   
      this.$store.dispatch('goods/loadWorks')   
    },
   computed: {
      ...mapState('goods', ['preload']),
  }
}
</script>

<style>

</style>

