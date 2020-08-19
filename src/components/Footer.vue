<template lang='pug'>
  footer.bg-secondary
    .container.md-layout.md-alignment-top-center
      .md-layout-item.md-small-size-100.md-size-60
        p
          small
            | Tramitecreole.cl es una inciativa de 2Brains, como aporte a las dificultades que la comunidad haitiana ha tenido en estos tiempos de pandemia COVID-19.
        p
          small
            | Agradecimientos:
            ul
              li
                | A Benjamín Cofré por su apoyo en la traducción Español-Creole y su asesoría con respecto a los usuarios haitianos.
              li A Patricia Villarroel por su apoyo y validaciones con la comunidad haitiana.
      .md-layout-item.md-small-size-100.md-size-10
      .md-layout-item.md-small-size-100.md-size-30
        p
          small
            | Diseñado y desarrollado por:
            ul
              li Pamela Armstrong: Lead UX en 2Brains
              li Sabino Velásquez: KAM en 2Brains
        .md-layout.md-alignment-center-center
          .md-layout-item.md-size-15
            a(href="#")
              font-awesome-icon(:icon="['fab', 'instagram']", :style="{ color: 'white' }", size='2x')
          .md-layout-item.md-size-15
            a.footer-link(href="#")
              font-awesome-icon(:icon="['fab', 'facebook']", :style="{ color: 'white' }", size='2x')
          .md-layout-item.md-size-15
            a(href="#")
              font-awesome-icon(:icon="['fab', 'twitter']", :style="{ color: 'white' }", size='2x')
          .md-layout-item.md-size-55
            a(href="http://www.2brains.cl", target="_blank")
              img.right(src="@/assets/img/2b.png" alt="AFC")
</template>

<script>
// import { db } from '@/firebase'
// import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  // data() {
  //   return {
  //     loading: true,
  //     error: null,
  //     footer: {}
  //   }
  // },

  // computed: {
  //   ...mapGetters('lang', ['lang'])
  // },

  // mounted() {
  //   this.$bind('footer', db.collection('general').doc('footer'))
  //     .then( () => {
  //       this.loading = false
  //     })
  //     .catch((error) => {
  //       this.error = error
  //     })
  // }
}
</script>

<style scoped lang="scss">
.mar-right{
  margin-right: 8px;
}
footer{
  margin-top: 80px;
  color: white;
}
</style>
