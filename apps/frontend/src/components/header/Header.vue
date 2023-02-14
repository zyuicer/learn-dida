<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = {
  home: () => {
    return router.push({
      path: "/",
    });
  },
};
</script>
<template>
  <div class="flex header-bg h-40px py-2px px-4">
    <div class="text-black flex items-center justify-start cursor-pointer">
      testDida
    </div>
  </div>
</template>
