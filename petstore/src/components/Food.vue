<template>
      <div class="container">
        
          <div class="mt-3 p-2">

               <div class="row mb-3">
                  <div class="col-sm-12 col-md-3" v-for="item in foods">
                      <div class="row">
                          <div class="col s12 m4 l4">
                              <div class="card p-1">
                                  <div class="card-content">
                                      <span class="card-title">{{item.title}}</span>
                                      <p>I am a very simple card. I am good at containing small bits of information.
                                          I am convenient because I require little markup to use effectively.</p>
                                  </div>
                                  <div class="card-action">
                                      <a href="#" class="btn blue lighten-1">This is a link</a>
                                      <a href="#" class="btn blue darken-1">This is a link</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
    </div>
</template>
<script>
const axios = require('axios').default;
export default {
    name:"Food",
     data(){
        return{
            showResults:false,
            query:'animal',
            foods:null,
            options: {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
            params: {
                query: 'pasta',
                cuisine: 'italian',
                excludeCuisine: 'greek',
                diet: 'vegetarian',
              
            },
            headers: {
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763'
            }
            },
           
        }
    },
    methods:{

    },
    mounted() {  
        axios.request(this.options).then(function (response) {
            if(response.data.results){
                // this.foods = response.data.results;
                console.log(this.foods)
                
            }
            // console.log(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });

    }

    
}

</script>
<style scoped>

</style>