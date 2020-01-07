<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  direction: rtl;
  line-height: 1.5;
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
dd,
dl {
  margin: 0;
}

#app {
  height: 100%;
}

.input-style-1 {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #424243ff;
  padding: 5px;
}

.container {
  padding: 0 30px;
}
</style>
