import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router';

let router = null;
let instance = null

import './public-path';

Vue.config.productionTip = false

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `child-${process.env.VUE_APP_SYSTEM}` : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
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
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
