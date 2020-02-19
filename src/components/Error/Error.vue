<template>
  <div class="error-alert">
    <h2>مشکلی در سرور پیش امده</h2>
    <p>لطفا بعد از چند دقیقه دوباره امتحان کنید</p>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped>
.error-alert {
  margin: 100px;
}

.error-alert h2 {
  font-size: 36px;
}
.error-alert p {
  font-size: 24px;
}
</style>
