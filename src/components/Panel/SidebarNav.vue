<template>
  <nav class="sidebar-nav">
    <ul>
      <SidebarLink link="/" icon="home"> خانه </SidebarLink>
      <SidebarLink link="/marks" icon="license">نمرات</SidebarLink>
      <SidebarLink link="/settings" icon="cog">تنظیمات</SidebarLink>
      <SidebarLink link="/contact" icon="phone-handset">تماس با ما</SidebarLink>
      <SidebarLink link="/mail/inbox" icon="inbox">صندوق پیام</SidebarLink>
      <SidebarLink link="/download" icon="download">دانلود</SidebarLink>
      <SidebarLink link="/logout" icon="exit">خروج</SidebarLink>
    </ul>
  </nav>
</template>

<script>
import SidebarLink from "./SidebarLink"
export default {
  name: "SidebarNav",
  components: {
    SidebarLink
  }
}
</script>

<style scoped>
.sidebar-nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column;
  text-align: center;
  padding: 0;
}
</style>
