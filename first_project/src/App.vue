<template>
  <div id="app">
    <Navbar/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Main
  }
}
</script>

<style>
@import '@/assets/css/style.css';
</style>
