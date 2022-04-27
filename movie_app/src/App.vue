<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <Header/>
    
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    
  },
  data(){
    return{
      showBanner:false
    }
  },
  mounted(){
    if(this.$router.history.current.name == "home"){
      this.showBanner = true
    }
  }
}
</script>

<style>
@import url('bulma/css/bulma.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
*{
  font-family: 'Rubik', sans-serif;
}
.bg-blue-dark{
  background-color: #35495E;
}
</style>
