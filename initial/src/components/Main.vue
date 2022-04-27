<template>
<main>
    <section class="section" id="banner">
    <div class="container">
        <div class="columns ">
            <div class="column is-6 p-1">
                <div class="img-container">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
              <div class="column is-6 p-1">
                <div class="img-container">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
</main>
    
</template>

<script>
export default {
    name:'MainComponent'
}
</script>
<style scoped>

    #banner{               
        background: #044a64;
        background: linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(90deg,#044a64 0%, #202124 80%);
    }
    #banner:hover{       
        background: #044a64;
        background: linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(351deg,#044a64 0%, #202124 80%);
    }
</style>