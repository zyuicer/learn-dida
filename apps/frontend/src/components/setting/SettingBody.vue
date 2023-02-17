<script setup lang="ts">
import { Themes } from '@/store/useTheme'
import SettingsSidebar from './SettingsSidebar.vue'
</script>
<template>
  <div
    class="flex justify-between items-center min-h-400px rounded-5px overflow-hidden"
  >
    <div class="w-1/5 dark:bg-#1f1f1f bg-white min-h-400px">
      <SettingsSidebar />
    </div>
    <div class="min-h-400px dark:bg-slate-800 bg-white w-4/5">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
