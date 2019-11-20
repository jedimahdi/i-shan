<template>
  <aside class="sidebar">
    <div class="logo">Logo</div>
    <nav class="sidebar-nav">
      <ul>
        <li><a href="#">خانه</a></li>
        <li><a href="#">نمرات</a></li>
        <li><a href="#">تنظیمات</a></li>
        <!--        <li><a href="#">تماس با ما</a></li>-->
        <!--        <li><a href="#">صندوق پیام</a></li>-->
        <!--        <li><a href="#">دانلود</a></li>-->
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
.sidebar-nav ul li a {
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 20px;
}

.logo {
  background-color: #43b649ff;
  text-align: center;
  padding: 20px 32px;
}
</style>
