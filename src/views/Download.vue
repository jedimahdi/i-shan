<template>
  <section class="downloads-page">
    <Box class="download">
      <DownloadsTable :downloads="downloads" />
    </Box>
  </section>
</template>

<script>
import DownloadsTable from "../components/DownloadsTable/DownloadsTable"
import Box from "../components/Box/Box"
import data from "../../jsons/downloads.json"

export default {
  name: "Download",
  components: {
    DownloadsTable,
    Box
  },
  data: function() {
    return {
      downloads: data
    }
  }
}
</script>

<style scoped>
.downloads-page {
  padding: 40px;
}
.download {
  background-color: #fff;
  padding: 40px 100px;
}
</style>
