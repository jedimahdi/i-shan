<template>
  <article class="active-message">
    <Box>
      <div v-if="message">
        <h4>{{ message.title }}</h4>
        <p>{{ message.text }}</p>
      </div>
      <div v-else>هیچ پیامی انتخاب نشده است.</div>
    </Box>
  </article>
</template>

<script>
import Box from "../Box/Box";
export default {
  name: "ActiveMessage",
  components: {
    Box
  },
  props: ["message"]
};
</script>

<style scoped></style>
