<template lang='pug'>
  .nav-bar(v-sticky, sticky-offset='{top: 0}')
    .container
      md-menu.menu(md-size='small')
        md-button(md-menu-trigger, to='/')
          img.logo-menu(svg-inline, src='@/assets/img/title.svg')
        md-menu.showMobile
          md-button.md-icon-button(md-menu-trigger)
            img(svg-inline, src='@/assets/img/menu.svg', alt='Menu')
          md-menu-content.mobile-menu
        md-button(to='/') Home
        md-button(to='contact') Contacto
        //- md-button.md-xsmall-hide(v-for='item in main_menu[lang]', :key='item.id', v-scroll-to='`#${item.link}`') {{item.title}}
      .langs.right
        span
          small {{lang == 'es' ? 'Idioma' : 'Language'}}:
        md-menu.mar-left(md-size='small', :md-close-on-click='true')
          md-button.md-icon-button(md-menu-trigger)
            img(:src='"@/assets/img/icon-" + lang + ".png"', alt='Spanish')
          md-menu-content(style='z-index:9999')
            md-list-item(@click='changeLang("ch")', disabled)
              img.disabled(src='@/assets/img/icon-ch.png', alt='Chinese')
              small.disabled.mar-left Chinese
            md-list-item(@click='changeLang("cr")')
              img(src='@/assets/img/icon-cr.png', alt='Spanish')
              small.mar-left Creole
</template>

<script>
// import { db } from '@/firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Nav',
  data() {
    return {
      loading: true
    }
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