<template>
      <div class="container">
        
          <div class="mt-3 p-2">
              <div class="row mt-3 mb-3">

                  <div class="card p-2">
                      <div class="card-image">
                          <img class="responsive-img" :src="yesno.image" alt="">
                      </div>
                        <div class="card-title text-center">
                            <h1 class="text-primary"> {{yesno.answer}}</h1>
                            <br>
                            <a href="/food" class="btn btn-success p-1" style="font-size:2em;">
                                <i class="fas fa-random"></i>
                            </a>
                        </div>
                  </div>
              </div>
               <div class="row mb-3">
                  <div class="col-sm-12 col-md-3" v-for="item in query">
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
            query:'ban',
            yesno:null
           
        }
    },
    methods:{
        getDataAndAndToDataRender(d){
            this.query = d
        }
    },
    mounted() { 
        axios.get("https://yesno.wtf/api")
        .then(response => {
            this.yesno = response.data
        })

        //   const options = {
        //         method: 'GET',
        //         url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
        //         params: {
        //             query: this.query,
        //             cuisine: 'italian',
        //             excludeCuisine: 'greek',
        //             diet: 'vegetarian',
                
        //         },
        //         headers: {
        //             'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        //             'X-RapidAPI-Key': '0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763'
        //         }
        //     }; 
        // axios.request(options)
        // .then(function (response) {
        //    console.log(response.data.results)
        //     })
        // .catch(function (error) {
        //     console.error(error);
        // });

    }

    
}

</script>
<style scoped>

</style>