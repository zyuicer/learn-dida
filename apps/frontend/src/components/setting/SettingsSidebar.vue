<script setup lang="ts">
import { sidebars } from '@/service/setting/sidebar'
import { MenuOption, NMenu } from 'naive-ui'
import { h } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
const options: MenuOption[] = sidebars.map((sidebar) => {
  return {
    label: () =>
      h(
        RouterLink,
        { to: `/setting${sidebar.path}` },
        { default: () => sidebar.title },
      ),
    key: sidebar.path.slice(1),
  }
})
const route = useRoute()
const getCurrentMenu = () => {
  const path = route.path
  const pathArr = path.split('/')
  return pathArr[pathArr.length - 1]
}
</script>
<template>
  <NMenu :options="options" :default-value="getCurrentMenu()"></NMenu>
</template>
<style scoped></style>
