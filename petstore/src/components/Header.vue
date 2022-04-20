<template>
    <nav>
        <ul>
            <li class="brand">
                <router-link to="/">
                    <i class="fas fa-cat"></i>
                    {{sitename}}
                </router-link>
            </li>
            <li>
                 <router-link to="/">
                 <i class="fas fa-home"></i>
                 Home
                 </router-link>
            </li>
             <li>
                 <router-link to="/food">
                 <i class="fas fa-cake"></i>
                 Food
                 </router-link>
            </li>
            <li>
                 <router-link to="/movies">
                 <i class="fas fa-film"></i>
                 Movie
                 </router-link>
            </li>
            <li>
                <router-link to="/form">
                    <i class="fas fa-shopping-cart"></i>

                    Cart Items 
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