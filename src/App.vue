<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { setQiankunState } from '@/qiankun/globalState'
export default {
  name: 'App',
  components: {},
  created() {
    setTimeout(() => {
      setQiankunState({
        userInfo: {
          name: '哈哈哈哈',
          age: 18
        }
      })
    }, 2000)

    // setQiankunState({
    //   userInfo: {
    //     name: '哈哈哈哈',
    //     age: 18
    //   }
    // })
  }
}
</script>

<style></style>
