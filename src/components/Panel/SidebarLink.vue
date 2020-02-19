<template>
  <li>
    <router-link v-bind:to="link" class="sidebar-link"
      ><span v-bind:class="getIcon"></span><slot></slot
    ></router-link>
  </li>
</template>

<script>
export default {
  name: "SidebarLink",
  props: {
    link: String,
    icon: String
  },
  computed: {
    getIcon() {
      return "lnr lnr-" + this.icon
    }
  }
}
</script>

<style scoped>
.sidebar-nav ul li a.router-link-exact-active {
  color: #42b547ff;
}
.sidebar-nav ul li a {
  display: block;
  text-decoration: none;
  color: #c7d1c7ff;
  padding: 20px 0;
  font-size: 16px;
}

.sidebar-nav ul li {
  width: 100%;
}

.sidebar-nav ul li:hover {
  background-color: #2e3342ff;
}
.lnr {
  display: block;
  padding-bottom: 5px;
  font-size: 28px;
  font-weight: 100;
}
</style>
