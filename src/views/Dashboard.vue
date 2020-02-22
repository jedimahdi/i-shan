<template>
  <section class="dashboard">
    <Error v-if="error" />
    <header class="top-bar" v-if="!error">
      <div class="search">
        <input
          type="text"
          placeholder="جستجو"
          v-model="search"
          @input="handleSearch"
        />
        <span class="lnr lnr-magnifier"></span>
      </div>
      <div class="start-time">
        <select
          name="sort"
          id="sort"
          class="input-style-1"
          @input="handleChangeSort"
        >
          <option value="remaining_days">روز مانده تا کلاس</option>
          <option value="remaining_percent">درصد تکمیل شده</option>
        </select>
      </div>
    </header>
    <div class="container dashboard-content">
      <LoadingSpinner :asOverlay="true" v-if="isLoading" />
      <CourseList v-if="!isLoading" :courses="courses" />
    </div>
  </section>
</template>

<script>
import CourseList from "../components/CourseList/CourseList"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Error from "../components/Error/Error"
import { handleRefreshToken, getUserCourses } from "../utils/services"
import { normalizeCourses } from "../utils/helpers"
import matchSorter from "match-sorter"

export default {
  name: "Dashboard",
  components: {
    CourseList,
    LoadingSpinner,
    Error
  },
  data: function() {
    return {
      courses: [],
      isLoading: true,
      search: "",
      error: false
    }
  },
  async mounted() {
    if (this.$store.state.courses.length > 0) {
      this.courses = this.$store.state.courses
      this.isLoading = false
    } else {
      try {
        await handleRefreshToken()
        let courses = await getUserCourses()

        courses = normalizeCourses(courses)
        courses = [].concat(courses).sort((a, b) => {
          return a.remaining_days - b.remaining_days
        })

        this.$store.commit("set_courses", {
          courses: courses
        })
        this.courses = courses
        this.isLoading = false
      } catch (err) {
        this.error = true
        this.isLoading = false
      }
    }

    // this.courses = [
    //   {
    //     title: "test 1"
    //   },
    //   {
    //     title: "test2"
    //   }
    // ]
    // this.isLoading = false
    // if (this.$store.state.courses.length > 0) {
    //   this.courses = this.$store.state.courses
    //   this.isLoading = false
    // } else {
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("jwt")}`
    //   }
    //   const source = axios.CancelToken.source()

    //   api
    //     .post("userRecCourse", { cancelToken: source.token }, { headers })
    //     .then(res => {
    //       this.courses = res.data
    //       this.$store.commit("set_courses", {
    //         courses: res.data
    //       })
    //       this.isLoading = false
    //     })
    // }
  },
  methods: {
    handleSearch() {
      this.courses = matchSorter(this.$store.state.courses, this.search, {
        keys: ["title"]
      })
    },
    handleChangeSort(e) {
      const { value } = e.target

      this.courses = [].concat(this.$store.state.courses).sort((a, b) => {
        return a[value] - b[value]
      })
    }
  }
}
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
  padding-bottom: 50px;
}
@media (max-width: 768px) {
  .top-bar {
    display: none;
  }
}
</style>
