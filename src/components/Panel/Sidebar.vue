<template>
  <aside class="sidebar">
    <div class="logo">
      <a href="#"><img src="../../assets/bitmap.png" alt="logo" width="35"/></a>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/"
            ><span class="lnr lnr-home"></span>خانه</router-link
          >
        </li>
        <li>
          <router-link to="/marks"
            ><span class="lnr lnr-license"></span>نمرات</router-link
          >
        </li>
        <li>
          <router-link to="/settings"
            ><span class="lnr lnr-cog"></span>تنظیمات</router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><span class="lnr lnr-phone-handset"></span>تماس با ما</router-link
          >
        </li>
        <li>
          <router-link to="/inbox"
            ><span class="lnr lnr-inbox"></span>صندوق پیام</router-link
          >
        </li>
        <li>
          <router-link to="/download"
            ><span class="lnr lnr-download"></span>دانلود</router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  background-color: #1b202eff;
  height: 100%;
  width: 100px;
  position: fixed;
  right: 0;
}

.sidebar-nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column;
  text-align: center;
  padding: 0;
}
.sidebar-nav ul li {
  width: 100%;
}

.sidebar-nav ul li:hover {
  background-color: #2e3342ff;
}

.sidebar-nav ul li a.router-link-exact-active {
  color: #42b547ff;
}
.sidebar-nav ul li a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 20px 0;
  font-size: 16px;
}

.logo {
  background-color: #43b649ff;
  text-align: center;
  padding: 15px 32px;
}

.sidebar-nav .lnr {
  display: block;
  padding-bottom: 5px;
  font-size: 28px;
  font-weight: 100;
}
</style>
