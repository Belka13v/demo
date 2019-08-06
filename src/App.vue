<template >
  <div id="app">
    <div id="nav">
      <router-link to="/">Home Accounting </router-link> |
      <router-link to="/login">Вход</router-link> |
      <router-link to="/register">Регистрация пользователя</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 60px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: #f3d19e; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #f0c78a, #8DC26F);
  background: -moz-linear-gradient(right, #b3d8ff, #8DC26F);
  background: -o-linear-gradient(right, #dcdcdc, #8DC26F);
  background: linear-gradient(to left, #F9A9F9, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
