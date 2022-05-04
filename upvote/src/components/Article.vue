<template>
  <div class="notification is-success" v-for="vote in articles" v-bind:key="vote.id">
      <div class="content">
         <div class="columns is-tablet">
             <div class="column is-11">
                  <div class="subtitle"># <span class="has-text-link is-size-3">{{vote.up + vote.down}}</span> votes : {{vote.author}}</div>
                 {{vote.body}}
             </div>
             <div class="column is-1">
                 <div class="up">
                     <a href="#" @click="addVote(vote)">
                         <span class="material-icons is-size-3">arrow_circle_up</span>
                     </a>
                 </div>
                 <div class="down">
                     <a href="#">
                         <span class="material-icons is-size-3">arrow_circle_down</span>
                     </a>
                 </div>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
import articles from '../store/articles.json'
export default {
    name:"ArticleComponent",
    data(){
        return {
            articles:articles
        }
    },  
    mounted(){
        console.log(articles)
    },
    methods:{
        addVote:(vote) => {
            console.log(vote)
            console.log(this.articles)
        }
    },
  
}
</script>

<style>

</style>