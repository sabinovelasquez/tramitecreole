<template lang='pug'>
  section
    //- .all(v-if='!loading')
    .all
      header.container
        .md-layout.md-gutter.md-alignment-center-center
          .md-layout-item.md-small-size-100.md-size-50
            .info
              h1.md-display-1.md-accent
                | Nou ede ou konprann pwosedi yo nan eta a nan Chili
              h2.md-headline
                | Te ayudamos a entender los trámites del estado de Chile
              p.md-body-1
                | Sou sit sa a nou ede ou konprann diferan pwosedi eta chilyen an, nou tradui yo nan kreol e nou eksplike etap pa etap pou chak moun.
              p.md-body-2
                | En este sitio te ayudamos a comprender los diferentes trámites del estado Chileno, los tradujimos a Créole y te explicamos el paso a paso para cada uno.
              p
                md-button.md-raised.md-primary Enskri
          .md-layout-item.md-small-size-100.md-size-50
            p
              img.logo-text(svg-inline, src='@/assets/img/people.svg', alt='People')
    //- .md-layout.md-alignment-center-center.loading(v-else)
    //-   .main-loading
    //-     img(svg-inline, src='@/assets/img/people.svg', alt='Logo')
    //-     h2.main-loading.niconne {{ lang == 'en' ? 'Cargando...' : 'Loading...' }}
        
  
</template>

<script>
// import { db } from '@/firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      loading: true,
      main_title: [],
      main_menu: []
    }
  },
  mounted() {
    // this.$ga.page('Landing')
    // // this.$bind('main_title', db.collection('general').doc('main-title'))
    // // this.$bind('main_menu', db.collection('general').doc('main-menu'))
    //   .then( () => {
    //     this.loading = false
    //   })
    //   .catch((error) => {
    //     this.error = error
    //   })
  },
  computed: {
    ...mapGetters('lang', ['lang'])
  },
  methods: {
    ...mapActions('lang', ['setLang']),
    changeLang(val) {
      this.setLang({lang: val})
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/global.scss';
</style>