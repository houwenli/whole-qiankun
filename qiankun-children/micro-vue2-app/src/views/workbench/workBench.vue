<template>
  <div>
    <div>
      <router-link :to="{ name: 'microApp1' }">子应用1 --- vue2</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'microApp2' }">子应用2 --- vue3</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
