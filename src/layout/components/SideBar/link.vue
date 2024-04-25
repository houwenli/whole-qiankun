<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const isExternalFn = function (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

const type = computed(() => {
  if (isExternalFn(props.to)) {
    return 'a'
  }
  return 'router-link'
})

function linkProps(to) {
  if (isExternalFn(to)) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener'
    }
  }
  return {
    to: to
  }
}
</script>
