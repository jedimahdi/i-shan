<template>
  <div class="courses">
    <Course />
    <Course />
    <Course />
    <Course />
  </div>
</template>

<script>
import Course from "../Course/Course";
export default {
  name: "CourseList",
  components: {
    Course
  }
};
</script>

<style scoped>
.courses {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
