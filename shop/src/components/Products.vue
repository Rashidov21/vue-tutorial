<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <a href="#" @click="get">Get</a>
                <div class="product p-2 m-2">
                    <img width="200" height="auto" :src="image" class="img-rounded" alt="">
                    <h2 v-text="title"></h2>
                    <h3><span v-text="price"></span> </h3>
                    <div class="mt-2">
                        <p>
                            <span v-text="description"></span>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
export default {
  
    name:"products-component",
    data() {
         
         return {
             title:"",
             category:"",
             price:"",
             description:"",
             image:""

         }    
    },
    methods:{
        get:function(){
            let res = fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json => {
                this.title = json.title
                this.category = json.category
                this.price = json.price
                this.description = json.title
                this.image = json.image
            })
            
            return res
        }
    }
}

</script>
<style scoped>
    
</style>