<template lang='pug'>
  section
    header.bg
      .container.md-layout.md-alignment-center
        .logo
          img.logo-cherry(svg-inline, src='@/assets/img/cherry-logo.svg', alt='Southern Lands')
          img.logo-text(svg-inline, src='@/assets/img/southernlands-logo-text.svg', alt='Southern Lands')
      .container.md-layout.md-alignment-center
        p.tagline.niconne {{main_title[lang]}}
    .nav-bar(v-sticky, sticky-offset='{top: 0}')
      .container
        md-menu.menu(md-size='small', md-direction='bottom-start')
          md-button.md-icon-button(md-menu-trigger, v-scroll-to='"#app"')
            img.logo-menu(svg-inline, src='@/assets/img/cherry-logo.svg')
          md-button(v-for='item in main_menu[lang]', :key='item.id', v-scroll-to='`#${item.link}`') {{item.title}}
        .langs.right
          a(@click='changeLang("en")') EN 
          | / 
          a(@click='changeLang("es")') ES
</template>

<script>
import { db } from '@/firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      main_title: [],
      main_menu: []
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
  },
  firestore: {
    main_title: db.collection('general').doc('main-title'),
    main_menu: db.collection('general').doc('main-menu')
  }
}
</script>

<style scoped lang='scss'>
.nav-bar{
  background-color: #1A1A1A;
  .menu{
    .md-button{
      margin-left: 12px;
      @media (max-width: 960px){
        margin-left: 0;
      }
    }
  }
}
header.bg{
  height: 360px;
  background: linear-gradient(to bottom, rgba(0,0,0,.9), rgba(0,0,0,0) 360px), url('../assets/img/bg-1.jpg');
  background-size: cover;
  background-position: center center;
  .logo {
    margin: 80px auto 0;
    width: 180px;
    text-align: center;
    .logo-cherry{
      width: 40px;
    }
    .logo-text{
      margin-top: 8px;
      width: 100%;
    }
  }
  .tagline{
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 1);
    font-size: 24px;
  }
}
.langs{
  line-height: 36px;
  a{
    cursor: pointer;
    &.disabled{
      cursor: not-allowed;
    }
  }
}
img.logo-menu{
    width: 18px;
    margin-left: -3px;
    margin-bottom: 9px;
  }
</style>