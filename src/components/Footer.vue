<template lang='pug'>
  footer.bg-secondary
    .container.md-layout.md-alignment-top-center
      .md-layout-item.md-small-size-100.md-size-33
        p
          small
            | Tramitecreole.cl es una inciativa de 2Brains, como aporte a las dificultades que la comunidad haitiana ha tenido en estos tiempos de pandemia COVID-19
      .md-layout-item.md-small-size-100.md-size-33
        p
          small
            | Agradecimientos:
            ul
              li
                | A Benjamín Cofré por su apoyo en la traducción Español-Creole y su asesoría con respecto a los usuarios haitianos.
              li A Patricia Villarroel Por su apoyo y validaciones con la comunidad haitiana
      .md-layout-item.md-small-size-100.md-size-33
        p
          small
            | Diseñado y desarrollado por:
            ul
              li Pamela Armstrong: Lead UX en 2brains
              li Sabino Velásquez: KAM en 2Brain
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
