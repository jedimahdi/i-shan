<template>
  <div class="panel">
    <Sidebar />
    <MobileTopBar />
    <main class="outer-container">
      <router-view />
    </main>
    <MobileMenuBar />
  </div>
</template>

<script>
import Sidebar from "./Sidebar"
import MobileMenuBar from "./MobileMenuBar"
import MobileTopBar from "./MobileTopBar"

export default {
  name: "Panel",
  components: {
    Sidebar,
    MobileMenuBar,
    MobileTopBar
  }
}
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
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .outer-container {
    padding-right: 0;
  }
}
</style>
