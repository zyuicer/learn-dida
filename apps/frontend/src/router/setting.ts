import { RouteRecordRaw } from 'vue-router'
import Setting from '@/pages/setting/Setting.vue'
import { sidebars } from '@/service/setting/sidebar'
const SETTING_PATH = 'setting'
const subComponents = import.meta.glob('/src/components/setting/Sub/**/**.vue')
const settingChildren: RouteRecordRaw[] = sidebars.map((sidebar) => {
  return {
    path: `/${SETTING_PATH}${sidebar.path}`,
    name: sidebar.name,
    component:
      subComponents[`/src/components/setting/Sub/${sidebar.name}/index.vue`],
  }
})
export const settingRouter: RouteRecordRaw = {
  path: `/${SETTING_PATH}`,
  name: SETTING_PATH,
  component: Setting,
  children: settingChildren,
  redirect: settingChildren[0].path,
}
