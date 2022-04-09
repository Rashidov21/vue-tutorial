<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3>Main Products</h3>
        <div class="mt-3">
          <div class="row pl-3 pr-3"  v-for="product in products">
            <div class="col-sm-12 col-md-12">
              <div class="product">
                <div class="row">
                  <div class="col-sm-5">                    
                    <img class="product-img" v-bind:src="product.image" :alt="product.title">
                  </div>
                  <div class="col-sm-7">
                    <div class="title h3">{{product.name}}</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  // props: [],
  data(){
    return{
       products: [{
                id: 1,
                name: "Nike Predator Star",
                price: 18020,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
                itemCount: 15,
                image: require("@/assets/nike2.jpg"),
                colors: ["#F7C31D", "#B7851D", "#B785C8"],
                rating: 3
            },
            {
                id: 2,
                name: "Nike Mercurial",
                price: 16020,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
                itemCount: 15,
                image: require("@/assets/nike3.jpg"),
                colors: ["#F7C31D", "#B7851D", "#B785C8"],
                rating: 4
            },
            {
                id: 3,
                name: "Nike Star Meme",
                price: 12320,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi, maxime soluta corporis aliquam placeat quaerat tempore est consectetur voluptatem omnis nihil, nostrum itaque distinctio aut asperiores. Dolores, totam esse?",
                itemCount: 15,
                image: require("@/assets/nike.jpg"),
                colors: ["#F7C31D", "#B7851D", "#B785C8"],
                rating: 5
            },

        ],
   
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
      // addToCart(item){
      //   this.cart.push(item.id)
      // }
  },
  props:[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-img{
  max-width: 80%;
}
</style>
