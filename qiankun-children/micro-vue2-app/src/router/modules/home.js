
// 主页路由
export default [
  {
    path: '',
    component: () => import('@/views/home/homeIndex.vue'),
    name: 'index',
    meta: {
      title: '首页'
    }
  }
]
