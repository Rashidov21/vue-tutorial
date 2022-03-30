<template>
  <div class="home">
   <Navbar/>
   <ProductsComponent/>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Navbar from '@/components/Navbar.vue'
import ProductsComponent from '@/components/Products.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    ProductsComponent
  }
}
</script>
