import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
// unocss preset

export default defineConfig({
  // 预配置
  shortcuts: [
    [
      'header-bg',
      'w-full bg-light-100 border-gray-300 border-y-1 dark:text-white text-white font-medium',
    ],
    ['base-color', 'dark:bg-#18181c dark:text-white text-black'],
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetUno(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
