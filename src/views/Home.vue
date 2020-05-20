<template lang='pug'>
  #top.content(sticky-container)
    Header
    Body
</template>

<style lang='scss'>
</style>

<script>
import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'
import {scroller} from 'vue-scrollto/src/scrollTo'

const firstScrollTo = scroller()


export default {
  name: 'home',
  components: {
    Header,
    Body
  },
  mounted() {
    firstScrollTo('#app')
  }
}
</script>