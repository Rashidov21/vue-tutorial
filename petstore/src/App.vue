<template>
  <div id="app">
    <nav>
      <div class="slot"></div>
      <div class="slot">
        <router-link to="/">Home</router-link>
        <router-link to="/form">Form</router-link>
      </div>
      <div class="slot"></div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  font-family: "Poppins",sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.slot{
  width: 150px;
}
nav{
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #bfc7c4;
}
.container{
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
  border: 0.2px solid #bfc7c4;
}
a{
  text-decoration: none;
  color: #368a26;
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 20px;
}
</style>
