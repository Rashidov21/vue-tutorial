<template>
  <Header />
  <Main />
  
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
@import 'bulma/css/bulma.css';
*{
  transition: all 0.5s ease-in-out; 
}
</style>
