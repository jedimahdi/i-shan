<template>
  <div class="settings">
    <div class="setting-group">
      <h4>تنظیمات ضاهر</h4>
      <Box>
        <SettingsOption>
          رنگ بندی
          <template v-slot:options>
            <option value="">تم شماره یک</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          فونت
          <template v-slot:options>
            <option value="">ایران یکان</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          اندازه فونت
          <template v-slot:options>
            <option value="">متوسط</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          زوم صفحه
          <template v-slot:options>
            <option value="">صد در صد</option>
          </template>
        </SettingsOption>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from "../components/Box/Box";
import SettingsOption from "../components/SettingsOption/SettingsOption";

export default {
  name: "Settings",
  components: {
    Box,
    SettingsOption
  }
};
</script>

<style scoped>
.settings {
  width: 800px;
  margin: auto;
}
</style>
