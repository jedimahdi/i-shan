<template>
  <section class="inbox">
    <LoadingSpinner asOverlay="true" v-if="isLoading" />
    <Messages v-if="!isLoading" :messages="messages" />
  </section>
</template>

<script>
import Messages from "../components/Messages/Messages";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import api from "../utils/api";

export default {
  name: "Inbox",
  components: {
    Messages,
    LoadingSpinner
  },
  data: function() {
    return {
      messages: [],
      isLoading: true
    };
  },
  mounted() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    };
    api.post("mail/get", { method: "sent" }, { headers }).then(res => {
      let messages = res.data.map(message => ({ ...message, active: false }));
      if (messages.length > 0) {
        messages[0].active = true;
      }
      this.messages = messages;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped></style>
