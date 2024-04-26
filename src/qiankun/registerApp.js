import router from '@/router'

import { systemList } from './systemList'

/**
 * 最终构造的形式
 * [
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]
 */

const getEntry = port => {
  return process.env.NODE_ENV !== 'production' ? `//${window.location.hostname}:${port}` : ''
}

const createApps = systemList.map(({ name, port, ...args }) => {
  let entry = getEntry(port) + `/child-${name}`
  return {
    name,
    entry,
    activeRule: `/child-${name}/`,
    props: {
      ...args
    }
  }
})

export const finalApps = () => {
  createApps.forEach(item => {
    // 容器
    item.container = '#subapp-viewport'

    Object.assign(item.props, {
      mainRoute: router // 父级路由实例
    })
  })

  return createApps
}

/* qiankun全局声明周期钩子 */
export const microConfig = {
  beforeLoad: [app => {}], // 预加载
  beforeMount: [app => {}], // 挂载前回调
  afterMount: [app => {}], // 挂载后回调
  beforeUnmount: [app => {}], // 卸载前回调
  afterUnmount: [app => {}] // 卸载后回调
}
