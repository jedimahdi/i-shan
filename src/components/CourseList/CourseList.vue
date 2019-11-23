<template>
  <section class="courses">
    <Course />
    <Course />
    <Course />
    <Course />
  </section>
</template>

<script>
import Course from "./Course";
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
