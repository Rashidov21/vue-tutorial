<template>
  <div class="detail">
      <section>
          <div class="container">
              <div class="row">
                  <div class="col-sm-12 col-md-9">
                      <div class="card">
                          <div class="row">
                              <div class="col-sm-12 col-md-6">
                                  <img :src="movie.poster" alt="">
                              </div>
                              <div class="col-sm-12 col-md-6">
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
import data from '../assets/movies.json'
export default {
    name:"DetailView",
    data(){
        return {
            movie:null
        }
    },
    created:function(){
        for(let m of data){
            let movieId = this.$route.params.id
            if(m.id === movieId){
                this.movie = m
            }
        }
    }
}
</script>

<style>

</style>