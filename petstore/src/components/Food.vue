<template>
      <div class="container">
        
          <div class="mt-3 p-2">
              <div class="row mb-3">
                  <div class="col-sm-12 col-md-6">
                      <form action="#" method="get" >
                          <input type="search" v-model="query"
                          class="form-control"
                          placeholder="Search collections">
                      </form>
                      <a href="#" class="btn btn-danger" @click='getFoods' >Get Photo</a>
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
           
        }
    },
    methods:{
        getFoods(){
      
            const options = {
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
            };

            axios.request(options).then(function (response) {
                console.log(response.data.results);
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
    mounted() {
       

    }

    
}

</script>
<style scoped>

</style>