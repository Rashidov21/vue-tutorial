<template>

  <div class="home">
    <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <div class="d-flex justify-content-start p-2 mt-5 h3">
        Most Popular Movies
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-3 col-lg-4 mt-2"
        v-for="movie , key in movies"
        v-bind:key="key">
          <div class="movie">
            <div class="movie-img">
              <router-link
              :to="{name:'detail',params:{id:movie.id}}">
                <img :src="movie.poster" alt="">
              </router-link>
             
            </div>
            <!-- <div class="movie-info">
              <a v-bind:href="movie.title" class="title">
                {{movie.title}}
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 /* eslint-disable */
import Header from '../components/Header.vue'
const axios = require('axios').default;
import data from '../assets/movies.json';
export default {
  name: 'HomeView',
  data(){
    return{
      movies:[]
    }
  },
  components: {
   Header,
  },
  mounted(){
    let list = []
    for(let k in data){
        if(list.length > 20){
          break
        }
        list.push(data[k])
      }
      this.movies = list
    // for(let i = 0; i < 20; i++){
    //    for(let k in data){
    //       console.log(data[i])
    //     }
    // }
    // axios.get('../assets/data.json',{})
    // .then(
    //   data => console.log(data)
    // )
    // fetch("../assets/data.json")
    // .then(response => response.json())
    // .then(data => console.log(data))
  }
}
</script>
