<template>
  <header>
    <router-link to="/"><h1>Antonio's web page</h1></router-link>
  </header>
  <body>
    <router-view />
  </body>
  <footer>
    <p>Antonio's web page</p>
    <p>2024</p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #283618;
}

header {
  text-align: center;
}

footer {
  text-align: center;
}

a.router-link-exact-active {
  text-decoration: none;
  color: inherit;
}

body {
  background-color: #fefae0;
}
</style>
