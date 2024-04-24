import router from '.'

router.beforeEach((to, from, next) => {
  console.log(1111)
  next()
})
