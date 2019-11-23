<template>
  <section class="inbox">
    <Messages :messages="messages" />
  </section>
</template>

<script>
import Messages from "../components/Messages/Messages";

const data = [
  {
    id: 1,
    active: false,
    title: "فعال سازی دوره انمیشن سینمایی",
    text: "سلام. این نوشته صرفا برای نمایش جای نوشته می باشد."
  },
  {
    id: 2,
    active: true,
    title: "فعال سازی دوره مدلینگ اجسام سخت",
    text: "سلام. این نوشته صرفا برای نمایش جای نوشته می باشد."
  },
  {
    id: 3,
    active: false,
    title: "فعال سازی دوره تست",
    text: "سلام. این نوشته صرفا برای نمایش جای نوشته می باشد."
  },
  {
    id: 4,
    active: false,
    title: "فعال سازی دوره تست ۲",
    text: "سلام. این نوشته صرفا برای نمایش جای نوشته می باشد."
  },
  {
    id: 5,
    active: false,
    title: "فعال سازی دوره تست ۳",
    text: "سلام. این نوشته صرفا برای نمایش جای نوشته می باشد."
  }
];

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
