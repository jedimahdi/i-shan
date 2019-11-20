<template>
  <aside class="sidebar">
    <div class="logo">
      <a href="#"><img src="../../assets/bitmap.png" alt="logo" width="35"/></a>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li class="active">
          <a href="#"><span class="lnr lnr-home"></span>خانه</a>
        </li>
        <li>
          <a href="#"><span class="lnr lnr-license"></span>نمرات</a>
        </li>
        <li>
          <a href="#"><span class="lnr lnr-cog"></span>تنظیمات</a>
        </li>
        <li>
          <a href="#"><span class="lnr lnr-phone-handset"></span>تماس با ما</a>
        </li>
        <li>
          <a href="#"><span class="lnr lnr-inbox"></span>صندوق پیام</a>
        </li>
        <li>
          <a href="#"><span class="lnr lnr-download"></span>دانلود</a>
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

.sidebar-nav ul li.active a {
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
