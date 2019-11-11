<template lang='pug'>
  footer
    .container.md-layout.md-alignment-center
      .md-layout-item.md-small-size-100
        h4 Southernlands Chile
        p Padre Mariano #291
          br
          | Providencia, Santiago.
        p
          a(href='mailto:marcela@southernlands.cl') info@southernlands.cl
      .md-layout-item.md-small-size-100(v-if='footer.certification')
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
      footer: {}
    }
  },
  computed: {
    ...mapGetters('lang', ['lang'])
  },
  firestore: {
    footer: db.collection('general').doc('footer')
  }
}
</script>

<style scoped lang="scss">
</style>
