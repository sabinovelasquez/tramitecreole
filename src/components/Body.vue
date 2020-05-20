<template lang='pug'>
//- .cont(v-if='!loading')
.cont
  .banner
    .container Banner content
  section
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item
          h2.md-headline Pwosedi pou chilyen an
          p.md-body-1 Trámites del Estado Chileno
          p Nou prezante lis la nan pwosedi nan Créole pou ke ou ka konprann yo, chwazi youn nan ou bezwen pote soti nan.
          p Presentamos el listado de trámites en Créole para que pudas entenderlos, selecciona el que necesites realizar.
  section.banners
    .container  
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100.md-size-50
          md-card
            md-card-area
              md-card-media
                img(src="@/assets/img/afc-1.jpg" alt="People")
              md-card-header
                .md-title Koleksyon asirans chomaj
                .md-subhead Cobro del seguro de cesantía.
              md-card-content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            md-card-actions(md-alignment="left")
              md-button.md-raised.md-primary(to='/') Action
              md-button.md-raised.md-primary(to='detail') Action
        .md-layout-item.md-small-size-100.md-size-50
          md-card
            md-card-area
              md-card-media
                img(src="@/assets/img/afc-1.jpg" alt="People")
              md-card-header
                .md-title Koleksyon asirans chomaj
                .md-subhead Cobro del seguro de cesantía.
              md-card-content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            md-card-actions(md-alignment="left")
              md-button.md-raised.md-primary(to='/') Action
              md-button.md-raised.md-primary(to='detail') Action
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style scoped lang='scss'>
@import '@/assets/global.scss';

.banner{
  background-color: lighten($primary-color, 32);
}
.banners{
  padding: 20px auto;
}
</style>
