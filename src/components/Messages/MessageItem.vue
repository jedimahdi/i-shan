<template>
  <div
    class="message-item"
    :class="{ active: message.active }"
    @click="toggle"
    :id="message._id"
  >
    <h5>{{ message.title }}</h5>
    <p>{{ normalizeText(message.body) }}</p>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  props: ["message"],
  methods: {
    toggle(event) {
      this.$parent.$children.forEach(item => {
        if (item.$el.id === event.currentTarget.id) {
          item.message.active = !item.message.active;
        } else {
          item.message.active = false;
        }
      });
    },
    normalizeText(text) {
      if (text) {
        return text.substring(0, 38) + " ...";
      }
      return text;
    }
  },
  computed: {}
};
</script>

<style scoped>
.message-item {
  border-bottom: 1px solid #0c0f30ff;
  padding-bottom: 30px;
  padding-top: 20px;
  padding: 20px 20px 30px 20px;
  cursor: pointer;
}

.message-item:hover {
  background-color: #ccc;
}
.message-item:last-child {
  border: 0;
}

.message-item.active {
  background-color: #e3e3e3ff;
  border: 1px solid #0c0f30ff;
  border-bottom: 2px solid #0c0f30ff;
}

.message-item h5 {
  font-size: 17px;
  color: #8f9199ff;
}
</style>
