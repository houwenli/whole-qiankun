// 工作台路由

import Layout from '@/layout/index.vue'

export default [
  {
    path: '/workbench',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        path: '',
        component: () => import('@/views/workbench/index.vue'),
        name: 'workbench',
        meta: {
          title: '工作台',
          isMain: true,
          isMenu: true,
          activeMenu: '/workbench'
        }
      }
    ]
  }
]
