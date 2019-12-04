<template>
  <table id="downloads-table">
    <thead>
      <tr>
        <th>اسم فایل</th>
        <th>تاریخ</th>
        <th>سایز</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="download in downloads" :key="download.id">
        <td>{{ download.filename }}</td>
        <td>{{ timeConverter(download.createdOn) }}</td>
        <td>{{ download.size }} MB</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MarksTable",
  props: ["downloads"],
  methods: {
    timeConverter: function(t) {
      var a = new Date(t * 1000);
      var today = new Date();
      var yesterday = new Date(Date.now() - 86400000);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      if (a.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0))
        return "today, " + hour + ":" + min;
      else if (a.setHours(0, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0))
        return "yesterday, " + hour + ":" + min;
      else if (year == today.getFullYear())
        return date + " " + month + ", " + hour + ":" + min;
      else return date + " " + month + " " + year + ", " + hour + ":" + min;
    }
  }
};
</script>

<style scoped>
#downloads-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
}

#downloads-table td,
#downloads-table th {
  padding: 8px;
}

#downloads-table tr:nth-child(odd) {
  background-color: #e3e3e3ff;
}
#downloads-table tr:nth-child(even) {
  background-color: #f3f3f5ff;
}

#downloads-table tr:hover {
  background-color: #ddd;
}

#downloads-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: right;
  background-color: #f3f3f5ff;
  color: #191e2eff;
  font-weight: 400;
}
</style>
