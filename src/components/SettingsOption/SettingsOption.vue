<template>
  <div class="option">
    <label><slot></slot></label>
    <CustomSelect
      v-bind:width="250"
      v-bind:height="37"
      v-bind:icon-position="-3"
      class="option-select"
    >
      <slot name="options"></slot>
    </CustomSelect>
  </div>
</template>

<script>
import CustomSelect from "../CustomSelect/CustomSelect";
export default {
  name: "Option",
  components: {
    CustomSelect
  }
};
</script>

<style scoped>
.option {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.option label {
  font-size: 24px;
}

.option-select {
}
</style>
