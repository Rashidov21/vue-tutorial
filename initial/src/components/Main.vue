<template>
<main>
    <section class="section" id="banner">
    <div class="container">
        <div class="columns">
            <div class="column is-6 p-1">
                <div class="title has-text-white mt-5">
                    Vue.js & Bulma blog
                </div>
                <div class="subtitle mt-3">
                    <div class="content has-text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, optio qui iure quo veritatis quas.
                        Lorem ipsum dolor sit amet. elit. Rerum, optio qui iure qu
                    </div>
                </div>
                <a href="#" class="button is-link">
                    Read More
                </a>
            </div>
            <div class="column is-2"></div>
              <div class="column is-4 p-1">
                <div class="img-container">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section">
     <div class="container">
        <div class="columns">
            <div class="column is-9">
                <!-- POSTS  -->
                <div class="columns is-tablet">
                    <div class="column is-full" v-for="quote, key in quotes" v-bind:key="key">
                        <div class="notification is-info">
                            <div class="subtitle">{{quote.author}}</div>
                            
                            <div class="content">
                                {{quote.content}}
                            </div>
                             <span class="tag is-warning is-light m-1" v-for="tag, key in quote.tags" v-bind:key="key">
                                {{tag}}
                             </span>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</main>

</template>

<script>
export default {
    name:'MainComponent',
    data(){
        return{
          quotes:[]  
        }
    },
    mounted(){
        fetch("https://api.quotable.io/quotes")
        .then(response =>response.json())
        .then(data => {
            // console.log(data.results)
            for(let quote of data.results){
                this.quotes.push(quote)
            }
        })
    }
}
</script>
<style scoped>

    #banner{ 
        min-height: 450px;              
        background: #044a64;
        background: linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(90deg,#044a64 0%, #202124 80%);
    }
    /* #banner:hover{       
        background: #044a64;
        background: linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(351deg,#044a64 0%, #202124 80%);
    } */
</style>