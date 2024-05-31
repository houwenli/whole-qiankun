import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './router'



let router = null;
let instance = null


import './public-path';

function render(props = {}) {
  const { container } = props;

  let base = window.__POWERED_BY_QIANKUN__ ? `child-${process.env.VUE_APP_SYSTEM}` : '/'
  router = VueRouter.createRouter({
    // 使用history模式
    history: VueRouter.createWebHistory(base),
    routes
  })


  instance = createApp(App)
  instance.config.productionTip = false
  instance.use(router)

  console.log(instance)

  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);

  let { onGlobalStateChange } = props


  onGlobalStateChange((state) => {
    console.log(1111, state)
  }, true)

  render(props);
}
export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
