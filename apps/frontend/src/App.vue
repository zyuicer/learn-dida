<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import LayOut from '@/layout/Layout.vue'
import { getGlobalThemeStore } from '@/store'
const themeStore = getGlobalThemeStore()
</script>
<template>
  <NConfigProvider :theme="themeStore.naiveTheme">
    <LayOut>
      <RouterView />
    </LayOut>
  </NConfigProvider>
</template>
