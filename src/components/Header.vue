<template lang='pug'>
  section
    .all(v-if='!loading')
      header.bg
        .container.md-layout.md-alignment-center
          .logo
            img.logo-cherry(svg-inline, src='@/assets/img/cherry-logo.svg', alt='Southern Lands')
            img.logo-text(svg-inline, src='@/assets/img/southernlands-logo-text.svg', alt='Southern Lands')
        .container.md-layout.md-alignment-center
          p.tagline.niconne {{main_title[lang]}}
      .nav-bar(v-sticky, sticky-offset='{top: 0}')
        .container
          md-menu.menu(md-size='small')
            md-button.md-icon-button(md-menu-trigger, v-scroll-to='"#app"')
              img.logo-menu(svg-inline, src='@/assets/img/cherry-logo.svg')
            md-button(v-for='item in main_menu[lang]', :key='item.id', v-scroll-to='`#${item.link}`') {{item.title}}
          .langs.right
            span
              small {{lang == 'es' ? 'Idioma' : 'Language'}}:
            md-menu.mar-left(md-size='small', :md-close-on-click='true')
              md-button.md-icon-button(md-menu-trigger='')
                img(:src='"@/assets/img/icon-" + lang + ".png"', alt='Spanish')
              md-menu-content(style='z-index:9999')
                md-list-item(@click='changeLang("ch")', disabled)
                  img.disabled(src='@/assets/img/icon-ch.png', alt='Chinese')
                  small.disabled.mar-left Chinese
                md-list-item(@click='changeLang("en")')
                  img(src='@/assets/img/icon-en.png', alt='English')
                  small.mar-left English
                md-list-item(@click='changeLang("es")')
                  img(src='@/assets/img/icon-es.png', alt='Spanish')
                  small.mar-left Spanish
    .md-layout.md-alignment-center-center.loading(v-else)
      .main-loading
        img(svg-inline, src='@/assets/img/cherry-logo.svg', alt='Southern Lands')
        h2.main-loading.niconne {{ lang == 'en' ? 'Cargando info...' : 'Loading info...' }}
        
  
</template>

<script>
import { db } from '@/firebase'
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
    this.$bind('main_title', db.collection('general').doc('main-title'))
    this.$bind('main_menu', db.collection('general').doc('main-menu'))
      .then( () => {
        this.loading = false
      })
      .catch((error) => {
        this.error = error
      })
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
.disabled{
  opacity: .5;
  cursor: not-allowed;
}
.loading{
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: url('../assets/img/simple_dashed.png') repeat;
  top: 0;
  z-index: 999;
  .main-loading{
    color: $primary-color;
    font-size: 24px;
    text-align: center;
  }
}
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