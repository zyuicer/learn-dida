<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goTo = {
  home: () => {
    return router.push({
      path: '/',
    })
  },
  setting: () => {
    // TODO: useSetting
    router.push({
      path: '/setting',
    })
  },
  github: () => window.open('https://github.com/zyuicer/learn-dida'),
}
</script>
<template>
  <div
    class="flex base-color flex-between justify-between header-bg h-40px py-2px px-4 text-black"
  >
    <div
      class="text-black flex items-center justify-start cursor-pointer dark:text-white"
      @click="goTo.home"
    >
      testDida
    </div>
    <div class="flex flex-between">
      <button class="mx-2 !outline-none" @click="goTo.setting">
        <div i="carbon-settings" />
      </button>
      <button class="mx-2 !outline-none" @click="goTo.github">
        <div i="mdi-github" />
      </button>
    </div>
  </div>
</template>
