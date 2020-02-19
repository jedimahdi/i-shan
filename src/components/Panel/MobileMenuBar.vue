<template>
  <div class="mob-menu">
    <ul>
      <li>
        <router-link to="/"><span class="lnr lnr-home"></span></router-link>
      </li>
      <li>
        <router-link to="/inbox"
          ><span class="lnr lnr-inbox"></span
        ></router-link>
      </li>
      <li>
        <router-link to="/marks"
          ><span class="lnr lnr-license"></span
        ></router-link>
      </li>
      <li>
        <router-link to="/download"
          ><span class="lnr lnr-download"></span
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MobileMenuBar"
}
</script>

<style scoped>
@media (min-width: 768px) {
  .mob-menu {
    display: none;
  }
}
@media (max-width: 768px) {
  .mob-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #fff;
    z-index: 1;
    border-top: 2px solid #000;
  }

  .mob-menu ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0;
    list-style: none;
  }

  .mob-menu ul li {
    position: relative;
  }

  .mob-menu ul li a {
    color: #000;
    text-decoration: none;
    font-size: 34px;
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    box-sizing: border-box;
  }
  .mob-menu ul li a.router-link-exact-active {
    color: #42b547ff;
    /* position: relative;
    bottom: 40px; */
    /* background-color: #000; */
    border: 1px dotted #000;
  }
  /* .mob-menu ul li a.router-link-exact-active::before {
    content: "";
    color: #42b547ff;
    position: absolute;
    top: 40px;
    background-color: transparent;
    display: block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  } */
}
</style>
