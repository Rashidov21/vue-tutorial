<template>
      <div class="container">
          <h4>test</h4>
          <div class="mt-3 p-2">
            <div class="row">
                <div class="col-sm-12 col-md-3" v-for="image in info">
                      <div class="card">
                        <img :src="image.urls.small" class="card-img-top" alt=""> 
                        
                        <div class="card-body">
                            <p>{{image.width}}X{{image.height}}</p> 
                            <a :href="image.links.download" class="btn btn-primary">Download</a>    
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
    name:"Form",
     data(){
        return{
            url:"https://api.unsplash.com/photos?client_id=DAtzSsXFMCOsjXg03P5WiaVwwno54XVrtE4pBBmRTrw",
            info:null
        }
    },
    mounted() {
        axios
        .get(this.url)
        .then(response => {
            this.info = response.data
            console.log(this.info[0].urls.small)
        });
        

    }

    
}

</script>
<style scoped>

</style>