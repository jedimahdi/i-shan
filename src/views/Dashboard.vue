<template>
  <section class="dashboard">
    <header class="top-bar">
      <div class="search">
        <input type="text" placeholder="جستجو" />
        <span class="lnr lnr-magnifier"></span>
      </div>
      <div class="start-time">
        <input type="text" class="input-style-1" placeholder="زمان شروع دوره" />
      </div>
    </header>
    <div class="container dashboard-content">
      <LoadingSpinner :asOverlay="true" v-if="isLoading" />
      <CourseList v-if="!isLoading" :courses="courses" />
    </div>
  </section>
</template>

<script>
import CourseList from "../components/CourseList/CourseList";
import COURSES_DATA from "../../jsons/courses.json";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import api from "../utils/api";

export default {
  name: "Dashboard",
  components: {
    CourseList,
    LoadingSpinner
  },
  data: function() {
    return {
      courses: COURSES_DATA,
      isLoading: true
    };
  },
  mounted() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    };
    api.get("recCourse", { method: "get" }, { headers }).then(res => {
      this.courses = res.data;
      console.log(res);
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 17px;
  box-sizing: border-box;
}

.search {
  position: relative;
}

.search .lnr {
  position: absolute;
  left: 30px;
  top: 10px;
  color: #c7d1c7ff;
}

.search input {
  margin-right: 50px;
  border-radius: 20px;
  padding: 5px 30px;
  border: 1px solid #c9d3c9ff;
  font-size: 21px;
}

.search input::placeholder {
  color: #000;
  font-family: "Segoe UI";
}

.start-time {
  margin-left: 50px;
}

.start-time input {
  border-bottom: 2px solid #c9d3c9ff;
}

.dashboard-content {
  padding-top: 50px;
}
</style>
