<template>
  <div class="course">
    <div class="course-detail">
      <h5 class="course-category">
        <span class="lnr lnr-tag"></span> دوره انیمیشن سازی
      </h5>
      <h4 class="course-title">رشته انیمیت سه بعدی</h4>
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
        <span class="green-mode">85</span> درصد تکمیل شده
      </div>
      <div class="remaining-percent">
        <span class="red-mode">6</span> روز مانده تا کلاس بعدی
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course"
};
</script>

<style scoped>
.course {
  background-color: #f4f4f5ff;
  padding: 10px 0;
  width: 600px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);
}

.course-info {
  color: #8f9199ff;
  display: flex;
  justify-content: space-around;
  width: 250px;
  border: 1px solid #e3e3e3ff;
}
.green-mode {
  color: #42b547ff;
  font-size: 40px;
}
.red-mode {
  color: #f37339ff;
  font-size: 40px;
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
  margin-bottom: 30px;
  margin-top: 10px;
}
</style>
