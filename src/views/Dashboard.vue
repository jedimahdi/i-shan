<template>
  <div class="dashboard">
    <header class="top-bar">
      <div class="search">
        <input type="text" placeholder="جستجو" />
      </div>
      <div class="start-time">
        <input type="text" class="input-style-1" placeholder="زمان شروع دوره" />
      </div>
    </header>
    <div class="container dashboard-content">
      <CourseList />
    </div>
  </div>
</template>

<script>
import CourseList from "../components/CourseList/CourseList";
export default {
  name: "Dashboard",
  components: {
    CourseList
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
  padding: 13px;
  box-sizing: border-box;
}

.search input {
  margin-right: 50px;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #c9d3c9ff;
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
