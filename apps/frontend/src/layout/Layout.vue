<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import NavBar from '@/components/navbar/NavBar.vue'
</script>
<template>
  <div class="overflow-hidden">
    <Header />
    <div class="flex">
      <NavBar />
      <div
        class="flex-1 bg-slate-100 dark:text-white dark:bg-gray-900 h-[calc(100vh-40px)]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
