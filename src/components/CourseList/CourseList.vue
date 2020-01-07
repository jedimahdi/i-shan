<template>
  <section class="courses">
    <Course v-for="course in courses" :key="course._id" :course="course" />
  </section>
</template>

<script>
import Course from "./Course";

export default {
  name: "CourseList",
  props: ["courses"],
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
