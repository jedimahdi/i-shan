<template>
  <Box class="course" v-bind:overflowx="false">
    <div class="course-detail">
      <h5 class="course-category">
        <span class="lnr lnr-tag"></span> دوره انیمیشن سینمایی
      </h5>
      <h4 class="course-title">مدلینگ با استفاده از MAYA</h4>
      <div class="course-info">
        <div class="course-length">
          <span class="lnr lnr-clock"></span> 24:33:25
        </div>
        <div class="course-files">
          <span class="lnr lnr-paperclip"></span> 25
        </div>
        <div class="course-inbox"><span class="lnr lnr-inbox"></span> 3</div>
      </div>
    </div>
    <div class="course-left">
      <div class="remaining-percent">
        <span class="green-mode">85</span> <span>درصــــــــــد تکمیل شده</span>
      </div>
      <div class="remaining-percent">
        <span class="red-mode">6</span>
        <span>روز مـــــــــانده تا کلاس بعدی</span>
      </div>
    </div>
  </Box>
</template>

<script>
import Box from "../Box/Box";

export default {
  name: "Course",
  components: {
    Box
  }
};
</script>

<style scoped>
.course {
  background-color: #f4f4f5ff;
  flex-basis: 48%;
  display: flex;
  justify-content: space-around;
  padding: 0 40px 0 0;
}

.course-detail {
  border-left: 1px solid #e3e3e3ff;
  padding-left: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.course-left {
  padding: 20px;
}

.course-left div:first-child {
  border-bottom: 1px solid #e3e3e3ff;
}

.course-info {
  color: #8f9199ff;
  display: flex;
  justify-content: space-between;
  width: 250px;
  border: 1px solid #e3e3e3ff;
  padding: 10px 30px;
}

.course-length,
.course-files {
  border-left: 1px solid #e3e3e3ff;
  padding-left: 25px;
}

.course-info > div {
  padding-top: 5px;
  padding-bottom: 5px;
}

.course-info .lnr {
  position: relative;
  top: 2px;
  right: 2px;
}

.green-mode {
  color: #42b547ff;
}
.red-mode {
  color: #f37339ff;
}

.green-mode,
.red-mode {
  font-size: 40px;
  margin-left: 10px;
}

.course-category {
  color: #8f9199ff;
}
.course-category .lnr {
  position: relative;
  top: 3px;
}

.course-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 10px;
}

.remaining-percent {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #8f9199ff;
}
</style>
