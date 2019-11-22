<template>
  <div class="marks">
    <Box class="select-course">
      <label class="box-title">انتخاب دوره</label>
      <CustomSelect v-bind:center="true" v-bind:width="400">
        <option value="">یک دوره را انتخاب کنید</option>
        <option value="">دوره انیمیشن سینمایی</option>
      </CustomSelect>
    </Box>

    <Box class="course-average">
      <h5 class="box-title">مقایسه وضعیت هنرآموز با میانگین دوره</h5>
      <div class="flex">
        <RadarChart />
        <div class="total-marks">
          <div class="total-mark">
            <h6>نمره کل هنرآموز</h6>
            <small>60</small>
          </div>

          <div class="total-mark average-total-marks">
            <h6>نمره میانگین دوره</h6>
            <small>50</small>
          </div>
        </div>
      </div>
    </Box>

    <Box class="grade-table">
      <MarksTable />
    </Box>

    <Box>
      <h5 class="box-title">نمودار پیشرفت هنرآموز</h5>
      <LineChart />
    </Box>
  </div>
</template>

<script>
import Box from "../components/Box/Box";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import RadarChart from "../components/RadarChart/RadarChart";
import LineChart from "../components/LineChart/LineChart";
import MarksTable from "../components/MarksTable/MarksTable";

export default {
  name: "Marks",
  components: {
    RadarChart,
    Box,
    CustomSelect,
    LineChart,
    MarksTable
  }
};
</script>

<style scoped>
.marks {
  padding: 50px;
}
.select-course {
  display: flex;
  align-items: center;
}

.box-title {
  font-size: 28px;
  color: #8f9199ff;
  font-weight: 400;
}

.flex {
  display: flex;
}

.total-mark {
  text-align: center;
  margin: 60px 0;
}

.total-mark h6 {
  font-size: 22px;
  font-weight: 400;
}

.total-mark small {
  font-size: 28px;
}

.average-total-marks {
  color: #f3976fff;
}
</style>
