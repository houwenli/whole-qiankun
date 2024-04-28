import * as VueRouter from 'vue-router'

/**
 * 路由配置
 * meta: {
 *  title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
 *  activeMenu: '/index'         // 当前激活的菜单
 *  isMain: false                // 是否为主体应用，解决打开不必要的tags
 *  subName: name                // qiankun子应用
 *  isMenu: 'true'               // 是否菜单
 * }
 */

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
