<script setup lang="ts">
import { Themes } from '@/service/setting/theme'
</script>
<template>
  <div class="flex flex-wrap p-30px gap-18px">
    <template v-for="theme in Themes" :key="theme.label">
      <div class="flex flex-col" @click="theme.handle">
        <div
          class="w-55px h-55px justify-center rounded-5px overflow-hidden"
          :style="{ backgroundColor: theme.color }"
        ></div>
        <span class="text-center">{{ theme.label }}</span>
      </div>
    </template>
  </div>
</template>
