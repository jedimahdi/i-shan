<template>
  <section class="inbox">
    <Messages :messages="messages" />
  </section>
</template>

<script>
import Messages from "../components/Messages/Messages";
import data from "../../jsons/messages.json";

export default {
  name: "Inbox",
  components: {
    Messages
  },
  data: function() {
    return {
      messages: data
    };
  }
};
</script>

<style scoped></style>
