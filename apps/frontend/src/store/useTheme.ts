import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { darkTheme } from 'naive-ui'
import { computed, ref } from 'vue'
import { Theme, Themes } from '@/service/setting/theme'
export { Themes, Theme } from '@/service/setting/theme'
export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const currentThemeName = isDark.value ? Theme.Dark : Theme.Light
  const currentTheme = ref(
    Themes.find((theme) => theme.name === currentThemeName),
  )

  const naiveTheme = computed(() => (isDark.value ? darkTheme : null))

  const changeTheme = (theme: Theme) => {
    const themeItem = Themes.find((t) => {
      return t.name === theme
    })
    if (themeItem) {
      themeItem.handle()
    }
  }
  return {
    naiveTheme,
    currentTheme,
    toggleDark,
    changeTheme,
  }
})

let globalThemeStore: ReturnType<typeof useThemeStore>
export function getGlobalThemeStore() {
  if (!globalThemeStore) globalThemeStore = useThemeStore()
  return globalThemeStore
}
