import VueRouter from 'vue-router'
import Vue from 'vue'

// 从modules中自动获取路由
const moduleFiles = require.context('./modules', false, /\.js$/)

const moduleRoutes = moduleFiles.keys().reduce((routes, modulePath) => {
  const value = moduleFiles(modulePath)
  let moduleRoute = value.default || []
  return routes.concat(moduleRoute)
}, [])

Vue.use(VueRouter)

export default moduleRoutes
