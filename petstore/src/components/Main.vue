<template>
  <div class="container">
    <h3>Main</h3>
    <a href="#" @click="getProducts" class="btn">Get Products</a>
  </div>
</template>

<script>
export default {
  name: 'Main',
  // props: [],
  methods:{
    getProducts(){
      fetch("../assets/products.json", {
           headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
      })
      .then(response => response)
      .then(json => console.log(json));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
