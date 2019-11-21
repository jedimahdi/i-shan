<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Box"
};
</script>

<style scoped>
.box {
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);
  background-color: #f3f3f5ff;
  border-radius: 20px;
  padding: 20px 40px;
  margin-bottom: 50px;
}
</style>
