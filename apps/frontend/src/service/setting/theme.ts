import { getGlobalThemeStore } from '@/store'

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

interface ThemeItem {
  label: string
  name: Theme
  color: string
  handle: () => void
}

export const Themes: ThemeItem[] = [
  {
    label: '亮色',
    name: Theme.Light,
    color: '#f3f4f6',
    handle: () => {
      getGlobalThemeStore().toggleDark(false)
    },
  },
  {
    label: '暗色',
    name: Theme.Dark,
    color: '#18181c',
    handle: () => {
      getGlobalThemeStore().toggleDark(true)
    },
  },
]
