<script setup lang="ts">
import { NDropdown, NPopover } from 'naive-ui'
</script>
<template>
  <div
    class="flex h-[calc(100vh-40px)] items-center flex-col w-45px base-color border-r-2px border-gray-300"
  >
    <NPopover trigger="hover" placement="right">
      <template #trigger>
        <div
          class="py-5px h-8 w-full px-4px mt-15px cursor-pointer"
          i="mdi-calendar-check"
        ></div>
      </template>
      <span>任务</span>
    </NPopover>
    <NPopover trigger="hover" placement="right">
      <template #trigger>
        <div
          class="py-5px h-8 w-full px-4px mt-15px cursor-pointer"
          i="mdi-calendar-today
"
        ></div>
      </template>
      <span>日历</span>
    </NPopover>
    <NPopover trigger="hover" placement="right">
      <template #trigger>
        <div
          class="py-5px h-8 w-full px-4px mt-15px cursor-pointer"
          i="mdi-currency-sign"
        ></div>
      </template>
      <span>打卡</span>
    </NPopover>
    <NPopover trigger="hover" placement="right">
      <template #trigger>
        <div
          class="py-5px h-8 w-full px-4px mt-15px cursor-pointer"
          i="mdi-search"
        ></div>
      </template>
      <span>搜索</span>
    </NPopover>
  </div>
</template>
<style></style>
