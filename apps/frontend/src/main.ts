import { createApp } from "vue";
import "@unocss/reset/tailwind.css";
import "uno.css";
import App from "./App.vue";
import { setupDB } from "./db";
import { router } from "./router";

(async () => {
  await setupDB();
  const app = createApp(App).use(router);
  createNativeUiMeta();
  app.mount("#app");
})();

function createNativeUiMeta() {
  const meta = document.createElement("meta");
  document.head.appendChild(meta);
  meta.name = "native-ui-styles";
}
