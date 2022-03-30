<template>
 <nav>
 
   <ul>

      <li><router-link to="/">Home</router-link> </li>|
      <li><router-link to="/about">About</router-link></li>
   </ul>
 </nav>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
  
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{

  
  background-color: #F7C31D;
}
ul {
    width: 100%;
  list-style-type: none;
  padding: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 10px;
}
a {
  color: #3e4e47;
  font-size: 1.5em;
}
</style>
