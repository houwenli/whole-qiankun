
// 主页路由
export default [
  {
    path: '/home',
    component: () => import('@/views/home/homeIndex.vue'),
    name: 'index',
    meta: {
      title: '首页'
    }
  }
]
