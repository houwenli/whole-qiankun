import * as VueRouter from 'vue-router'

// 从modules中自动获取路由
const moduleFiles = require.context('./modules', false, /\.js$/)

const moduleRoutes = moduleFiles.keys().reduce((routes, modulePath) => {
  const value = moduleFiles(modulePath)
  let moduleRoute = value.default || []
  return routes.concat(moduleRoute)
}, [])

const router = VueRouter.createRouter({
  // 使用history模式
  history: VueRouter.createWebHistory(),
  routes: moduleRoutes
})

export default router
