<template>
  <section class="inbox">
    <Error v-if="error" />
    <LoadingSpinner asOverlay="true" v-if="isLoading" />
    <Messages v-if="!isLoading && !error" :messages="messages" />
  </section>
</template>

<script>
import Messages from "../components/Messages/Messages"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Error from "../components/Error/Error"
import { handleRefreshToken, getInboxMails } from "../utils/services"

export default {
  name: "Inbox",
  components: {
    Messages,
    LoadingSpinner,
    Error
  },
  data: function() {
    return {
      messages: [],
      isLoading: true,
      error: false
    }
  },
  async mounted() {
    try {
      await handleRefreshToken()
      this.messages = await getInboxMails()
      this.isLoading = false
    } catch (err) {
      this.error = true
      this.isLoading = false
    }
  }
}
</script>

<style scoped></style>
