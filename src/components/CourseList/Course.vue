<template>
  <router-link :to="'/course/' + course.title" class="course-link">
    <Box class="course" v-bind:overflowx="false">
      <div class="course-detail">
        <h5 class="course-category">
          <span class="lnr lnr-tag"></span> دسته بندی
        </h5>
        <h4 class="course-title">{{ course.title }}</h4>
        <div class="course-info">
          <div class="course-length">
            <span class="lnr lnr-clock"></span>
            ۰۶:۱۰:۲۵
            <!-- {{ parseInt(course.duration / (60 * 24)) }}:10:25 -->
          </div>
          <div class="course-files">
            <span class="lnr lnr-paperclip"></span> {{ toPersianDigits(34) }}
          </div>
          <div class="course-inbox">
            <span class="lnr lnr-inbox"></span> {{ toPersianDigits(93) }}
          </div>
        </div>
      </div>
      <div class="course-left">
        <div class="remaining-percent">
          <span class="green-mode">{{
            toPersianDigits(course.remaining_percent)
          }}</span>
          <span>درصــــــــــد تکمیل شده</span>
        </div>
        <div class="remaining-percent" v-if="course.remaining_days !== 0">
          <span class="red-mode">{{
            toPersianDigits(course.remaining_days)
          }}</span>
          <span>روز مـــــــــانده تا کلاس بعدی</span>
        </div>
        <div class="remaining-percent" v-if="course.remaining_days === 0">
          <span class="red-mode" style="font-size: 24px; padding: 12px"
            >کلاس امروزه</span
          >
        </div>
      </div>
    </Box>
  </router-link>
</template>

<script>
import Box from "../Box/Box"
import { toPersianDigits } from "../../utils/helpers"

export default {
  name: "Course",
  props: ["course"],
  components: {
    Box
  },
  methods: {
    toPersianDigits
  }
}
</script>

<style scoped>
.course-link {
  text-decoration: none;
}

.course-link:hover .course {
  background-color: #fff;
}
.course {
  background-color: #f4f4f5ff;
  flex-basis: 48%;
  display: flex;
  justify-content: space-around;
  padding: 0 40px 0 0;
  margin-bottom: 0;
}

.course-detail {
  padding-left: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.course-left {
  padding: 30px;
  border-right: 1px solid #e3e3e3ff;
}

.course-left div:first-child {
  border-bottom: 1px solid #e3e3e3ff;
}

.course-info {
  color: #8f9199ff;
  display: flex;
  justify-content: space-between;
  /* width: 250px; */
  border: 1px solid #e3e3e3ff;
  padding: 10px 0;
}

.course-length,
.course-files {
  border-left: 1px solid #e3e3e3ff;
  /* padding-left: 25px; */
}

.course-info > div {
  padding-left: 15px;
  padding-right: 15px;
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
  font-weight: 600;
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
  color: #000;
}

.remaining-percent {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #8f9199ff;
}

@media (max-width: 768px) {
  .course {
    padding-right: 25px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .course-detail {
    padding-left: 25px;
  }
  .course-title {
    font-size: 22px;
  }

  .course-info {
    padding: 5px 0;
  }
  .course-info > div {
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .course-left {
    padding: 10px;
  }
  .course-left > div {
    padding: 10px;
  }
  .course-left .red-mode,
  .course-left .green-mode {
    font-size: 30px;
  }
  .remaining-percent {
    font-size: 11px;
  }
}
</style>
