<template>
  <div
    class="custom-select"
    v-bind:class="{ center }"
    v-bind:style="{ width: getWidth }"
  >
    <select
      name="course"
      id="course-select"
      :style="{ paddingRight: getPadding, height: getHeight }"
    >
      <slot></slot>
    </select>
    <span
      class="lnr lnr-chevron-down-circle"
      :style="{ top: getIconPosition }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    center: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    },
    iconPosition: {
      type: Number,
      default: 3
    }
  },
  computed: {
    getWidth() {
      return this.width + "px";
    },
    getHeight() {
      return this.height + "px";
    },
    getIconPosition() {
      return this.iconPosition + "px";
    },
    getPadding() {
      const pad = this.width / 5;
      return pad + "px";
    }
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
}

.center {
  margin: auto;
}

#course-select {
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 20px;
  display: block;
  position: relative;
  font-family: "Segoe UI";
}

.custom-select .lnr {
  color: #000;
  padding: 12px 8px;
  position: absolute;
  left: 10px;
  z-index: 1;
  text-align: center;
  width: 10%;
  height: 100%;
  pointer-events: none;
  box-sizing: border-box;
  font-size: 20px;
}
</style>
