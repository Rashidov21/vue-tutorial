<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <main>
    <section class="section">
      <div class="columns">
        <div class="column is-10">
          <ArticleComponent />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArticleComponent from './components/Article.vue'

export default {
  name: 'App',
  components: {
  ArticleComponent
  }
}
</script>

<style>
*{
  font-family: "Poppins",sans-serif;
}
</style>
