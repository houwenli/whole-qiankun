// 主页路由
export default [
  {
    path: '',
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/homeIndex.vue'),
        name: 'index',
        meta: {
          title: '首页'
        }
      }
    ]
  }
]
