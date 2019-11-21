<template>
  <div class="custom-select">
    <select name="course" id="course-select">
      <slot></slot>
    </select>
    <span class="lnr lnr-chevron-down-circle"></span>
  </div>
</template>

<script>
export default {
  name: "CustomSelect"
};
</script>

<style scoped>
.custom-select {
  position: relative;
  margin: auto;
}

#course-select {
  border-radius: 10px;
  border: 0;
  padding: 10px;
  padding-right: 100px;
  width: 400px;
  height: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 20px;
  display: block;
  position: relative;
  font-family: "Segoe UI";
}

.custom-select .lnr {
  color: #000;
  padding: 12px 8px;
  position: absolute;
  left: 10px;
  top: 3px;
  z-index: 1;
  text-align: center;
  width: 10%;
  height: 100%;
  pointer-events: none;
  box-sizing: border-box;
  font-size: 20px;
}
</style>
