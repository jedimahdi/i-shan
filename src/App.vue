<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  direction: rtl;
  line-height: 1.5;
  height: 100%;
}

@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: bold;
  src: url("./assets/fonts/eot/iranyekanwebbold.eot");
  src: url("./assets/fonts/eot/iranyekanwebbold.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./assets/fonts/woff2/iranyekanwebbold.woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./assets/fonts/woff/iranyekanwebbold.woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./assets/fonts/ttf/iranyekanwebbold.ttf") format("truetype");
}

@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: 300;
  src: url("./assets/fonts/eot/iranyekanweblight.eot");
  src: url("./assets/fonts/eot/iranyekanweblight.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./assets/fonts/woff2/iranyekanweblight.woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./assets/fonts/woff/iranyekanweblight.woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./assets/fonts/ttf/iranyekanweblight.ttf") format("truetype");
}

@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/eot/iranyekanwebregular.eot");
  src: url("./assets/fonts/eot/iranyekanwebregular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-8 */ url("./assets/fonts/woff2/iranyekanwebregular.woff2")
      format("woff2"),
    /* FF39+,Chrome36+, Opera24+*/
      url("./assets/fonts/woff/iranyekanwebregular.woff") format("woff"),
    /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
      url("./assets/fonts/ttf/iranyekanwebregular.ttf") format("truetype");
}

body {
  font-family: "iranyekan", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
