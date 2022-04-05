<template>
    <h4>{{msg}}</h4>
</template>
<script>
export default {
    name:"first",
    data(){
        return{
            msg:"Hello new Component"
        }
    }
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
</style>