// 工作台路由


export default [
  {
    path: '/workbench',
    component: () => import('@/views/workbench/workBench.vue'),
    name: 'workbench',
    meta: {
      title: '工作台',
      isMain: true,
      isMenu: true,
      activeMenu: '/workbench'
    }
  }
]
