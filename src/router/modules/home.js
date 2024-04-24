// 主页路由

import Layout from '@/layout/index.vue'

export default [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home'),
        name: 'index',
        meta: {
          title: '首页',
          isMain: true
        }
      }
    ]
  }
]
