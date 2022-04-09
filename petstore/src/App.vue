<template>
  <div id="app">
    <header-component :cartItemCount="cartItemCount" />
    
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  name:"App",
  data(){
    return{
      cart:[]
    }
  },
  methods: {
    addToCart(item){
      this.cart.push(item.id)
    },
  },
  computed:{
    cartItemCount(){
      return this.cart.length || ""
    }
  },
  components:{
    "header-component":Header,
 
  }
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css');
*{
  font-family: "Poppins",sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  transition: all 0.3s;
}

.container{
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  border: 0.2px solid #bfc7c4;
}
a{
  text-decoration: none;
  color: #368a26;
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 20px;
}
</style>
