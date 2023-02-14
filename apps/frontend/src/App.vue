<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import { useDark, useToggle } from "@vueuse/core";
import LayOut from "@/layout/Layout.vue";
const isDark = useDark();
console.log(isDark);

console.log();
</script>
<template>
  <NConfigProvider>
    <LayOut>
      <RouterView />
    </LayOut>
  </NConfigProvider>
</template>
