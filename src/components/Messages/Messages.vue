<template>
  <div class="messages">
    <Box class="message-items">
      <MessageItem
        v-for="message in messages"
        :key="message._id"
        :message="message"
      />
    </Box>
    <div class="active-item">
      <ActiveMessage :message="getActiveMessage()" />
    </div>
  </div>
</template>

<script>
import MessageItem from "./MessageItem";
import ActiveMessage from "./ActiveMessage";
import Box from "../Box/Box";

export default {
  name: "Messages",
  components: {
    Box,
    ActiveMessage,
    MessageItem
  },
  props: ["messages"],
  methods: {
    getActiveMessage() {
      const actMessage = this.messages.find(item => item.active == true);
      return actMessage;
    }
  }
};
</script>

<style scoped>
.messages {
  display: flex;
  padding: 50px;
  justify-content: space-between;
}

.message-items {
  flex-basis: 30%;
  padding: 0;
  border: 1px solid #0c0f30ff;
}

.active-item {
  flex-basis: 65%;
}
</style>
