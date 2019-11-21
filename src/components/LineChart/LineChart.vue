<template>
  <apexchart
    type="line"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "LineChart",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "میانگین نمرات هنرآموزان دوره در پایان هر هفته",
          data: [30, 27, 33, 30, 20, 8, 20]
        },
        {
          name: "میانگین نمرات هنرآموزان دوره در پایان هر هفته",
          data: [20, 15, 45, 65, 55, 32, 70]
        }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          },
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          fontSize: "18px",
          fontFamily: "Segoe UI, Arial"
        },
        colors: ["#F37035", "#0C0F30"],
        stroke: {
          curve: "straight",
          width: 1.5
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7"]
        }
      }
    };
  }
};
</script>

<style scoped></style>
