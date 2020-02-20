<template>
  <section class="settings">
    <div class="setting-group">
      <h4>تنظیمات ضاهر</h4>
      <Box>
        <SettingsOption>
          <span>رنگ بندی</span>
          <template v-slot:options>
            <option value="">تم شماره یک</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>فونت</span>
          <template v-slot:options>
            <option value="">ایران یکان</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>اندازه فونت</span>
          <template v-slot:options>
            <option value="">متوسط</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>زوم صفحه</span>
          <template v-slot:options>
            <option value="">صد در صد</option>
          </template>
        </SettingsOption>
      </Box>
    </div>

    <div class="setting-group">
      <h4>دانلود خودکار</h4>
      <Box>
        <SettingsOption>
          <span>دوره تکرار</span>
          <template v-slot:options>
            <option value="">هفتگی</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>روز هفته</span>
          <template v-slot:options>
            <option value="">دوشنبه</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>زمان شروع دانلود</span>
          <template v-slot:options>
            <option value="">1398/07/01</option>
          </template>
        </SettingsOption>
        <SettingsOption>
          <span>زمان پایان دانلود</span>
          <template v-slot:options>
            <option value="">1398/07/23</option>
          </template>
        </SettingsOption>
      </Box>
    </div>
  </section>
</template>

<script>
import Box from "../components/Box/Box"
import SettingsOption from "../components/SettingsOption/SettingsOption"

export default {
  name: "Settings",
  components: {
    Box,
    SettingsOption
  }
}
</script>

<style scoped>
.settings {
  width: 800px;
  margin: auto;
}

.setting-group h4 {
  font-size: 28px;
  font-weight: 400;
  padding: 25px;
}
</style>
