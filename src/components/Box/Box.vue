<template>
  <div class="box-shadow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Box"
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);
}
</style>
