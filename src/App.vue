<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import './assets/css/reset.css'
import './assets/js/rem.js'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
</style>
