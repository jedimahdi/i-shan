<template>
  <div class="marks">
    <Box class="select-course box-shadow">
      <label for="course-select">انتخاب دوره</label>

      <div class="course-selector">
        <select name="course" id="course-select">
          <option value="">یک دوره را انتخاب کنید</option>
          <option value="">دوره انیمیشن سینمایی</option>
        </select>
        <span class="lnr lnr-chevron-down-circle"></span>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "../components/Box/Box";

export default {
  name: "Marks",
  components: {
    Box
  }
};
</script>

<style scoped>
.marks {
  padding: 50px;
}
.select-course {
  background-color: #f3f3f5ff;
  border-radius: 20px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
}

.select-course label {
  font-size: 32px;
  color: #8f9199ff;
}

.course-selector {
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
}

.course-selector .lnr {
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
