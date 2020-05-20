<template lang='pug'>
  footer.bg-secondary
    .container.md-layout.md-alignment-center
      small Trámite Creole © 2020
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
  line-height: 90px;
}
</style>
