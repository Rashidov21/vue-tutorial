<template>
    <div class="container">
            <div class="row pl-3 pr-3"  >
            <div class="col-sm-12 col-md-12">
              <div class="product">
                <div class="row">
                  <div class="col-sm-5">                    
                    <router-link :to="{name:'product', params:{id:product.id}}">
                      <img class="product-img" v-bind:src="product.image" :alt="product.title">
                    </router-link>
                  </div>
                  <div class="col-sm-7">
                      <h2>{{$route.params.id}}</h2>
                    <router-link :to="{name:'product', params:{id:product.id}}">
                      {{product.name}}
                    </router-link>
                   <!-- <router-link :to="{name:'Product', params:{id:product.id}}">
                      <div class="title h3">{{product.name}}
                        
                      </div>
                   </router-link> -->
                      <div class="p-2 h4 text-danger">
                        <big >{{product.price | formatPrice}}</big>
                        <br>
                        <i class="fas fa-star" v-for="n in product.rating"></i>
                      </div>
                      {{product.description}}
                      <div class="card-footer">
                        <a href="#" class="btn btn-danger">
                          <i class="fas fa-plus"></i>
                          Add to cart
                        </a>
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
export default {
    name:'Product',
    data(){
        return {
            product:''
        }
    },
    created:function() {
    axios.get('/assets/products.json')
    .then((data) => {
        console.log(data)
    })
},

}

</script>
<style scoped>

</style>