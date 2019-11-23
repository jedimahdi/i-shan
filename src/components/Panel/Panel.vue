<template>
  <div class="panel">
    <Sidebar />
    <main class="outer-container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "Panel",
  components: {
    Sidebar
  }
};
</script>

<style>
.panel {
  height: 100%;
}
.outer-container {
  min-height: 100%;
  position: relative;
  background-color: #e5e5e4ff;
  padding-right: 100px;
}
</style>
