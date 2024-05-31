import { initGlobalState } from 'qiankun'

const initialState = {
  // 用户信息
  userInfo: {}
}

const qiankunAction = initGlobalState(initialState)

qiankunAction.onGlobalStateChange(state => {
  // 修改全局数据
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      initialState[key] = state[key]
    }
  }
})

export function setQiankunState(state) {
  qiankunAction.setGlobalState(state)
}
