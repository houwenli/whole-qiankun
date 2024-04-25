// 处理菜单相关

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

export function useMenu() {
  let route = useRoute()

  const routes = router.getRoutes()

  const menuList = ref([])

  menuList.value = routes.filter(item => {
    let { meta } = item || {}

    return meta.isMenu
  })

  // 获取激活菜单
  // activeMenu
  const activeMenu = computed(() => {
    const { name } = route

    return name
  })

  return { menuList, activeMenu }
}
