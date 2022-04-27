<template>
  <div id="app">
    <Header/>
    <Banner />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Footer,
    
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
