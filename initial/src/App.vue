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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
*{
  font-family: 'Poppins', sans-serif;
}
</style>
