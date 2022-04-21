
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-12">
              
                <!-- {{products}} -->
                <div class="row">
                    <div class="col-sm-6 col-md-4" v-for="item in products" :key="item.id">
                           
                        <div class="card row p-2">
                        
                            <div class="col-sm-12">
                                <a href="#">
                                    <img width="200" height="auto" :src="item.image" class="responsive-img " alt="">
                                </a>
                                 <h5><span>{{item.title}}</span> </h5>
                            </div>
                            <div class="col-sm-12">
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <p class="h3 text-danger">
                                            <span>${{item.price}}</span>
                                        </p>
                                    </div>
                                   <div class="col-6">
                                        <a href="#" class="btn btn-primary">Buy</a>
                                   </div>                                  
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
/* eslint-disable vue/no-unused-components */
// eslint-disable-next-line vue/require-v-for-key
export default {
  
    name:"products-component",
    data() {
         
         return {
             products:null,
             isActive:true,
         }    
    },
    methods:{

    },
    mounted(){
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data => {
                this.products = []
                for(let i of data){
                    this.products.push(i)
                }
                console.log(this.products)
            })
    }
}

</script>
<style scoped>
    
</style>