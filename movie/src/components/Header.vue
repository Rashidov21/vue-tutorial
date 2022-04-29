<template>
  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
  <div class="container">
    <router-link to="/" class="navbar-brand text-white">Kinobase</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Serials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Cartoon</a>

        <li class="nav-item">
          <input type="search" placeholder="Search movie ..." class="form-control">
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"HeaderComponent"
}
</script>

<style>

</style>