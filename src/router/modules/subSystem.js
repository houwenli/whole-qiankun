import Layout from '@/layout/index.vue'

import { systemList } from '@/qiankun/systemList'

const createSubRoutes = systemList.map(({ name, title, ...args }) => {
  let path = `/child-${name}/:pathMatch(.*)`
  return {
    path,
    component: Layout,
    name,
    meta: {
      title,
      subName: name,
      isMain: false,
      ...args
    }
  }
})

console.log(createSubRoutes)

export default [...createSubRoutes]
