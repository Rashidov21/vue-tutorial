<template>

  <div class="home">
    <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'

export default {
  name: 'HomeView',
  components: {
   Header,
  }
}
</script>
