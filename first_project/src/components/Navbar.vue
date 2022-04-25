<template>
  <nav>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
      </ul>
  </nav>
</template>
<script>
export default {
    name:'navbar-component'
    
}
</script>
<style scoped>
nav ul{
    display: flex;
    justify-content: flex-end;
    align-content: center;
}
nav ul li{
    margin: 3px 50px;
}
nav ul li a{
    font-size: 1.8em;
    color: cadetblue;
    text-decoration: none;
}
</style>