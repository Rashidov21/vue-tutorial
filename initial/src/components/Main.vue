<template>
<main>
    <section class="section" id="banner">
    <div class="container">
        <div class="columns">
            <div class="column is-6 p-1">
                <div class="title has-text-white mt-5">
                    Vue.js & Bulma blog
                </div>
                <div class="subtitle mt-3">
                    <div class="content has-text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, optio qui iure quo veritatis quas.
                        Lorem ipsum dolor sit amet. elit. Rerum, optio qui iure qu
                    </div>
                </div>
                <a href="#" class="button is-link">
                    Read More
                </a>
            </div>
            <div class="column is-2"></div>
              <div class="column is-4 p-1">
                <div class="img-container">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section">
     <div class="container">
        <div class="columns">
            <div class="column is-9">
                <!-- POSTS  -->
                <div class="columns">
                    <div class="column is-3">
                        <div class="notification">
                            <button class="delete"></button>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
                        </div>
                    </div>
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
        min-height: 450px;              
        background: #044a64;
        background: linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(90deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(90deg,#044a64 0%, #202124 80%);
    }
    /* #banner:hover{       
        background: #044a64;
        background: linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -webkit-linear-gradient(351deg,#044a64 0%, #202124 80%);
        background: -moz-linear-gradient(351deg,#044a64 0%, #202124 80%);
    } */
</style>