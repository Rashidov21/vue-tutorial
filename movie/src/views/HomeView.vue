<template>

  <div class="home">
    <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="d-flex justify-content-start p-2 mt-5 h3">
        Most Popular Movies
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-4">
          <div class="movie">
            <div class="movie-img">
              <img src="../assets/img/poster.png" alt="">
            </div>
            <div class="movie-info">
              <div class="title">
                Batman VS Superman
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
