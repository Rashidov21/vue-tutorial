<template>
    <nav class="navbar bg-blue-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="../assets/logo.png" >
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item has-text-white">
        Home
      </a>

     

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-white">
          Genres
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Action
          </a>
          <a class="navbar-item">
            Dramma
          </a>
          <a class="navbar-item">
            Comedy
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Other
          </a>
        </div>
      </div>
       <a class="navbar-item has-text-white">
        Contact
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-link">
            <strong>Sign up</strong>
          </a>

        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name:"HeaderComponent",
}
</script>
<style>

</style>