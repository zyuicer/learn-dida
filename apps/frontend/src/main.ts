import { createApp } from 'vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './style/overrides.css'
import App from './App.vue'
import { setupDB } from './db'
import { router } from './router'
import { createPinia } from 'pinia'
;(async () => {
  await setupDB()
  const app = await createApp(App).use(router).use(createPinia())
  createNativeUiMeta()
  app.mount('#app')
})()

function createNativeUiMeta() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}
