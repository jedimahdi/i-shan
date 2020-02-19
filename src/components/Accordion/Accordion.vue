<template>
  <dl class="accordion ac-box" role="presentation">
    <AccordionItem
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
      :activeId="activeId"
      @changeActive="onChangeActive"
    >
    </AccordionItem>
  </dl>
</template>

<script>
import AccordionItem from "./AccordionItem"

export default {
  name: "Accordion",
  components: {
    AccordionItem
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    initActive: {
      type: Object
    }
  },
  data() {
    return {
      groupId: null,
      activeId: ""
    }
  },
  mounted() {
    this.groupId = this.$el.id
    if (this.initActive) {
      this.activeId = this.initActive.vid
    }
    // console.log(this.content[0].details[1].vid);
    // this.activeId = this.content.0.0.vid;
    // if (this.content) {
    //   console.log(this.content[0].details[1].vid);
    //   this.activeId = this.content[0].details[1].vid;
    // }
  },
  methods: {
    onChangeActive(id) {
      this.$emit("changeActive", id)
      this.activeId = id
    }
  }
}
</script>

<style scoped>
.accordion {
  padding: 0;
  margin: 0;
}

.accordion div:not(:last-child) {
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}

.accordion div:last-child .accordion-item-details {
  border-radius: 5px;
}

.accordion dd {
  margin-left: 0;
}
</style>
