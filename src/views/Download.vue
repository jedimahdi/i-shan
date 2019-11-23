<template>
  <section class="downloads-page">
    <Box class="download">
      <DownloadsTable />
    </Box>
  </section>
</template>

<script>
import DownloadsTable from "../components/DownloadsTable/DownloadsTable";
import Box from "../components/Box/Box";

export default {
  name: "Download",
  components: {
    DownloadsTable,
    Box
  }
};
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
