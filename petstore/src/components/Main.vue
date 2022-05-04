<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3 class="fs-1 text-muted font-weight-bold mt-3 mb-5">Main Products</h3>
        <div class="mt-3">
          <div class="row pl-3 pr-3"  v-for="product, key in products" v-bind:key="key">
            <div class="col-sm-12 col-md-12">
              <div class="product">
                <div class="row">
                  <div class="col-sm-5">                    
                    <router-link :to="{name:'product', params:{id:product.id}}">
                      <img class="product-img" src="../assets/logo.png" >
                    </router-link>
                  </div>
                  <div class="col-sm-7">
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
                        <a href="#" @click="$emit.addToCart(product)" class="btn btn-danger">
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
    </div>
  </div>
</template>

<script>
import Products from './products.json'
export default {

  name: 'Main',
  // props: [],
  data(){
    return{
       products: Products.products,
     
   
    }
  },
   filters: {
        formatPrice: function(price) {
            if (!parseInt(price)) {
                return ""
            }
            if (price > 99999) {
                let priceString = (price / 100).toFixed(2);
                let priceArray = priceString.split("").reverse();
                let index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.slice(index + 3, 0, ",");
                    index += 4

                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }

        }
    },
  methods:{

  },
  props:[addToCart]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-img{
  max-width: 80%;
}
</style>
