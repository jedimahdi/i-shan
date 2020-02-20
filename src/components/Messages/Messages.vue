<template>
  <div class="messages">
    <div class="message-pages">
      <ul>
        <li>
          <router-link to="/mail/sent">
            <span class="lnr lnr-exit-up"></span> پیام‌های ارسالی</router-link
          >
        </li>
        <li>
          <router-link to="/mail/inbox"
            ><span class="lnr lnr-enter-down"></span> پیام‌های
            دریافتی</router-link
          >
        </li>
      </ul>
    </div>
    <Box class="message-items">
      test
      <table class="messages-table" cellspacing="0">
        <tbody>
          <MessageItem
            v-for="message in messages"
            :key="message._id"
            :message="message"
          />
        </tbody>
      </table>
    </Box>
    <!-- <div class="active-item">
      <ActiveMessage :message="getActiveMessage()" />
    </div> -->
  </div>
</template>

<script>
import MessageItem from "./MessageItem"
// import ActiveMessage from "./ActiveMessage";
import Box from "../Box/Box"

export default {
  name: "Messages",
  components: {
    Box,
    // ActiveMessage,
    MessageItem
  },
  props: ["messages"],
  methods: {}
}
</script>

<style scoped>
.messages {
  /* display: flex; */
  padding: 50px;
  padding-right: 400px;
  /* justify-content: space-between; */
}

.message-pages {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 0;
  top: 0;
  width: 300px;
  box-shadow: 0 2px 6px rgba(10, 10, 10, 0.2);
}

.message-pages ul {
  padding: 0;
  margin-top: 71px;
}

.message-pages ul li {
  list-style: none;
}

.message-pages ul li a {
  display: block;
  color: #000;
  text-decoration: none;
  font-size: 19px;
  background-color: #e3e3e3ff;
  padding: 15px;
}

.message-pages ul li a span.lnr {
  padding: 10px;
  font-size: 26px;
  position: relative;
  top: 3px;
}

.message-pages ul li a.router-link-exact-active {
  background-color: #f37035ff;
  color: #e3e3e3ff;
}

/* .message-items {
} */

.messages-table {
  width: 100%;
  border: 1px solid #ccc;
  font-size: 18px;
}

.messages-table tr {
  line-height: 50px;
}
.checked {
  background: #fefefe;
}
/* .active-item {
  flex-basis: 65%;
} */
</style>
