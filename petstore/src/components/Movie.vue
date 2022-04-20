<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div class="row mt-3 mb-5">
                    <div class="col-sm-12">
                        <input type="search" v-model="query" placeholder="Movie title..." class="form-control w-100">
                    </div>
                </div>
                <div class="card">
                    <div class="card-title">
                       {{lastElemsForList}}
                    </div>
                    <div class="card-content"></div>
                    <div class="card-action"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Movie",
    data(){
        return {
            url:'',
            apikey:"&&apikey=fb78af15",
            query:'x-men',
            movie:null,
            movies:[]
        }
    },
    mounted(){
        fetch(`http://www.omdbapi.com/?apikey=fb78af15&&t=${this.query}&&type=series`)
        .then(response => response.json())
        .then(data => {
            this.movies.push(data)
        })
    },
    computed:{
        lastElemsForList(){
            return this.movies.reverse()
        }
    }
}
</script>
<style scoped>

</style>