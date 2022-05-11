<template>
  <div class="detail">
      <section>
          <div class="container mt-5 ">
              <div class="row">
                  <div class="col-sm-12 col-md-12">
                      <div class="card p-3">
                          <div class="row">
                              <div class="col-sm-12 col-md-6">
                                  <img :src="movie.poster" alt="">
                              </div>
                              <div class="col-sm-12 col-md-6">
                                  <br>
                                  <h3>Movie detail</h3>
                                  <ul class="list-group">
                                      <li class="list-group-item">
                                          <h5>Title : <b>{{movie.title}}</b></h5>
                                      </li>
                                       <li class="list-group-item">
                                          <h5>Slogan : <b>{{movie.short_description}}</b></h5>
                                      </li>
                                      <li class="list-group-item">
                                          <h5>Country : <b>{{movie.country}}</b></h5>
                                      </li>
                                      <li class="list-group-item">
                                          <h5>Year : <b>{{movie.year}}</b></h5>
                                      </li>
                                      <li class="list-group-item">
                                          <h5>Quality : <b>{{movie.quality}}</b></h5>
                                      </li>
                                      <li class="list-group-item">
                                          <h5>Duration : <b>{{movie.duration}}</b></h5>
                                      </li>
                                      <li class="list-group-item">
                                          <h5>Rating : <b>{{movie.rating}}</b></h5>
                                      </li>
                                  </ul>
                                    <p class="content pt-3">
                                        {{movie.description}}
                                    </p>
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