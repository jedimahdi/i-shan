<template>
  <apexchart
    width="800"
    type="radar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "RadarChart",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "نمراتی که هنرآموز در پایان هر هفته دریافت میکند",
          data: [66, 100, 50, 83, 83]
        },
        {
          name: "میانگین نمرات هنرآموزان دوره در پایان هر هفته",
          data: [100, 83, 83, 50, 50]
        }
      ],

      chartOptions: {
        labels: ["هفته اول", "هفته دوم", "هفته سوم", "هفته چهارم", "هفته پنجم"],
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColor: "#e9e9e9",
              fill: {
                colors: ["#f3f3f5ff", "#f3f3f5ff"]
              }
            }
          }
        },
        colors: ["#0C0F30", "#F37035"],
        fill: {
          opacity: 0
        },
        legend: {
          position: "right",
          fontSize: "18px",
          horizontalAlign: "center",
          fontFamily: "Segoe UI, Arial",
          offsetY: 100,
          markers: {
            radius: 0
          }
        },
        markers: {
          size: 2,
          colors: ["#0C0F30", "#F37035"],
          strokeColor: ["#0C0F30", "#F37035"],
          strokeWidth: 1
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val;
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            }
          }
        }
      }
    };
  }
};
</script>

<style>
.apexcharts-legend-marker {
  margin-left: 15px;
}

.apexcharts-legend-series {
  padding: 10px;
}
</style>
