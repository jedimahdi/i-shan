<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!--   <router&#45;link to="/">Home</router&#45;link> | -->
    <!--   <router&#45;link to="/about">About</router&#45;link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<style>
html {
  direction: rtl;
  line-height: 1.5;
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

#app {
  height: 100%;
}
</style>
