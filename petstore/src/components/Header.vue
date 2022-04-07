<template>
    <nav>
        <ul>
            <li class="brand">
                <a href="#">
                    <i class="fas fa-cat"></i>
                    {{sitename}}
                </a>
            </li>
            <li>
                 <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/form">
                    <i class="fas fa-shopping-cart"></i>
                    Cart
                </router-link>
            </li>
        </ul>       
    </nav>
</template>
<script>
export default {
    name:"Header",
     data(){
         return{
             sitename:"PetStore"
         }
     },
     props:[]
}
</script>
<style scoped>

.brand a{
    font-size:1.9em;
    color: chartreuse;
    }
.slot{
  width: 150px;

}
nav ul{
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bfc7c4;
}
nav ul li{
    margin-left: 100px;
}
nav ul li a:hover{
    border-bottom: 1px solid yellowgreen;
}
</style>