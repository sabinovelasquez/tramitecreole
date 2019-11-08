<template lang='pug'>
  .content
    Header
    Body
    Footer
</template>

<style lang="scss">
</style>

<script>
import Header from '@/components/Header.vue'
import Body from '@/components/Body.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>