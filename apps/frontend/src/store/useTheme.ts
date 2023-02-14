import { defineStore } from "pinia";
import { useDark } from "@vueuse/core";
const useThemeStore = defineStore("theme", () => {
  const isDark = useDark();
  return {};
});
