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
      <table id="grades-table">
        <thead>
          <tr>
            <th>موضوعات</th>
            <th>هفته اول</th>
            <th>هفته دوم</th>
            <th>هفته سوم</th>
            <th>هفته چهارم</th>
            <th>هفته پنجم</th>
            <th>هفته ششم</th>
            <th>هفته هفتم</th>
            <th>میانگین نمرات</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>نمره کل</td>
            <td>35</td>
            <td>78</td>
            <td>24</td>
            <td>78</td>
            <td>92</td>
            <td>100</td>
            <td>100</td>
            <td>93</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>نورپردازی فضاهای داخلی</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
            <td>78</td>
          </tr>
          <tr>
            <td>استفاده از دوربین</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>فضاسازی</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
            <td>63</td>
          </tr>
          <tr>
            <td>استخوان بندی</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
            <td>59</td>
          </tr>
        </tbody>
      </table>
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

export default {
  name: "Marks",
  components: {
    RadarChart,
    Box,
    CustomSelect,
    LineChart
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

.grade-table {
  overflow-x: auto;
}

#grades-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
}

#grades-table td,
#grades-table th {
  padding: 8px;
}

#grades-table tr:nth-child(even) {
  background-color: #e3e3e3ff;
}

#grades-table tr:hover {
  background-color: #ddd;
}

#grades-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #f37035ff;
  color: #e3e3e3ff;
}

#grades-table th:nth-child(even) {
  color: #f37035ff;
  background: #e3e3e3ff;
}
#grades-table tfoot tr {
  background-color: #42b547ff;
}
</style>
