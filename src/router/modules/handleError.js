// 处理错误

export default [
  {
    path: '/401',
    component: () => import('@/views/error/401.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue')
  }
]
