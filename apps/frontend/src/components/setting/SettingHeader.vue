<script setup lang="ts">
import { NSpace } from 'naive-ui'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleToTaskPage = () => {
  router.push({
    path: '/task',
  })
}
</script>
<template>
  <NSpace justify="space-between" align="center" class="my-15px">
    <h1 class="font-600 text-3xl dark:text-white">设置</h1>
    <div
      @click="handleToTaskPage"
      class="select-none w-100px h-40px text-xl rounded-md flex justify-center text-white items-center bg-blue-500 transition-colors active:bg-blue-700 cursor-pointer hover:bg-blue-400"
    >
      完成
    </div>
  </NSpace>
</template>
