<template>
  <div class="mob-top-menu">
    <div class="hamburger"><span class="lnr lnr-menu"></span></div>
    <div class="brand">آیشــــن</div>
    <div class="back-arrow">
      <a @click="$router.go(-1)">
        <span class="lnr lnr-arrow-left"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileTopBar"
}
</script>

<style scoped>
@media (min-width: 768px) {
  .mob-top-menu {
    display: none;
  }
}
@media (max-width: 768px) {
  .mob-top-menu {
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #43b649ff;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1b202eff;
    padding: 0 40px;
    border-bottom: 1px solid #1b202eff;
  }

  .mob-top-menu .brand {
    font-size: 28px;
  }

  .mob-top-menu .hamburger {
    font-size: 38px;
  }

  .mob-top-menu .back-arrow {
    font-size: 28px;
  }
  .mob-top-menu .back-arrow a {
    font-size: 28px;
    cursor: pointer;
  }
}
</style>
