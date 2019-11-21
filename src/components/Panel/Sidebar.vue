<template>
  <aside class="sidebar">
    <Logo />
    <SidebarNav />
  </aside>
</template>

<script>
import SidebarNav from "./SidebarNav";
import Logo from "./Logo";

export default {
  name: "Sidebar",
  components: {
    SidebarNav,
    Logo
  }
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
</style>
