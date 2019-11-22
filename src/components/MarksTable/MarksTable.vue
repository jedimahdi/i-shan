<template>
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
</template>

<script>
export default {
  name: "MarksTable"
};
</script>

<style scoped>
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
