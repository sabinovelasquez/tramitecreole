<template lang='pug'>
  footer
    .container.md-layout.md-alignment-center(v-if='!loading')
      .md-layout-item.md-small-size-100
        h4
          img(svg-inline, src='@/assets/img/southernlands-logo-text.svg', alt='Southern Lands')
        p(v-for='(item, key) in footer.address[lang].content')
          md-icon.mar-right(v-if='footer.address[lang].content.length == (key + 1)') phone
          | {{item}}
        p
          md-icon.mar-right mail
          a(href='mailto:marcela@southernlands.cl') info@southernlands.cl
      .md-layout-item.md-small-size-100
        h4 {{footer.certification[lang].title}}
        ul
          li(v-for='item in footer.certification[lang].content') {{item}}
    .container.md-layout.md-alignment-center
      p
        small Southernlands SpA © 2019
</template>

<script>
import { db } from '@/firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  data() {
    return {
      loading: true,
      error: null,
      footer: {}
    }
  },
  computed: {
    ...mapGetters('lang', ['lang'])
  },
  mounted() {
    this.$bind('footer', db.collection('general').doc('footer'))
      .then( () => {
        this.loading = false
      })
      .catch((error) => {
        this.error = error
      })
  }
}
</script>

<style scoped lang="scss">
.mar-right{
  margin-right: 8px;
}
</style>
