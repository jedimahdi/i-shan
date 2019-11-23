<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <button @click="toggle" class="accordion-item-trigger">
        <h4 class="accordion-item-title-text">{{ item.title }}</h4>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
      </dd>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: ["item", "multiple", "groupId"],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;
      else {
        this.$parent.$children.forEach(item => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active;
          else item.item.active = false;
        });
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    }
  }
};
</script>

<style>
.accordion-item-trigger {
  padding: 0.75rem 1.25rem;
}

.accordion-item-title {
  position: relative;
}

.accordion-item-title h4 {
  font-size: 1rem;
  margin-bottom: 0;
  padding-right: 1.25rem;
  font-family: "Segoe UI";
}

.accordion-item-trigger {
  width: 100%;
  text-align: right;
  background-color: transparent;
  border: none;
}

.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border-right: 1px solid #363636;
  border-bottom: 1px solid #363636;
  transform: translateY(2px) rotate(135deg);
  transition: transform 0.2s ease;
}
.accordion-item.is-active {
  background-color: #e3e3e3ff;
}

.accordion-item.is-active .accordion-item-trigger-icon {
  transform: translateY(-2px) rotate(45deg);
}

.accordion-item-details {
  overflow: hidden;
  background-color: #e3e3e3ff;
}

.accordion-item-details-inner li a {
  text-decoration: none;
  color: #211e1eff;
  display: block;
  padding: 5px;
  padding-right: 70px;
}
.accordion-item-details-inner ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.accordion-item-details-inner li.active {
  background-color: #f37035ff;
}
.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter,
.accordion-item-leave-to {
  height: 0 !important;
}
</style>
