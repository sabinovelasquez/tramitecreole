<template lang='pug'>
//- .cont(v-if='!loading')
.cont
  section
    .head-title
      .container
        h2.md-headline Enskripsyon nan Echanj Travay Nasyonal la
        h3.md-body-1 Inscripción en la Bolsa Nacional de Empleo
    .head-subline
      .container
        .md-layout.md-gutter.md-alignment-center-center
          .md-layout-item
            h2 Kontak
            p Contacto
          .md-layout-item.md-small-size-50.md-size-25
            .md-layout.md-alignment-center-center
              .md-layout-item.md-size-25
                md-icon.md-primary.md-size-2x mail
              .md-layout-item
                span
                  a(href='mailto:soport@bne') soport@bne
          .md-layout-item.md-small-size-50.md-size-25
            .md-layout.md-alignment-center-center
              .md-layout-item.md-size-25
                md-icon phone_android
              .md-layout-item
                span 56 2 24055200
                br
                span Atención de lunes a domingo, de 07:00 a 22:00 horas
    .container
      .md-layout.md-gutter
        .md-layout-item
          h2.md-headline Etap sa yo swiv
          p.md-body-1 Pasos a seguir
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-size-5.md-small-size-20
          md-icon.md-primary.md-size-2x laptop
        .md-layout-item.md-size-95.md-small-size-80
          h3 Pwosedi sou entènèt

      h3.text-primary 1. Kreye yon kont sou sit <a href="www.bne.cl" target="_blank">www.bne.cl</a> la
      md-divider

      h3.text-primary 2. Nan kont lan:
      p.text-primary Konplete done kourikoulòm sa yo:
      ul
        li Eksperyans pwofesyonèl: aktyèl kondisyon travay, eksperyans travay
        li enfòmasyon akademik: nivo edikasyon, fòmasyon ak lòt kou, Chili sètifikasyon Valora
        li Lòt enfòmasyon: gwoup travay, lang, lisans chofè, machin, ladrès ak enterè
        li Atant Travay: Enfòmasyon sou Travay, orè Travay
      md-divider

      h3.text-primary 3. Voye CV nan fòm lan
      md-divider

      h3.text-primary 4. Jenere lèt kouvèti
      p Ka pwodwi otomatikman pa chanje yon koup la jaden.
      md-divider

      h3.text-primary 5. Ka pwodwi otomatikman pa chanje yon koup la jaden.
      p Nan meni an navigasyon ou pral jwenn seksyon an rechèch JOB, kote ou ka fè rechèch pa kalite travay.
      md-divider

      h3.text-primary 6. Aplike
      p Chwazi òf la nan enterè, kole tèks la nan lèt la kouvri epi chwazi bouton an aplike.
      md-divider

      h3.text-primary 7. Kijan poum sètifye ke mwen ap chèche yon travay?
      p Pou rezon ki resevwa benefis yo akize nan Fon Solidarite Chomaj, ou dwe:
      ol
        li Enskri epi antre nan rezime w nan echanj travay nasyonal la.
        li Aplike pou yon opòtinite travay rapòte pa echanj travay nasyonal la.
        li Patisipe nan entèvyou travay medyatè pa Echanj Travay Nasyonal la.
        li Pa rejte yon opòtinite travay, dimensionnement kou oswa bousdetid fòmasyon yo ofri nan Echanj Travay Nasyonal la.
      md-divider

      h3.text-primary 8. Benefis pou yo te enskri nan BNE la
      ul
        li Enfòmasyon sou asirans chomaj
        li Gratis enskripsyon nan ofri
        li Swiv aplikasyon ou
        li Istwa enskripsyon òf
        li Orè ak siveyans nan entèvyou yo
</template>

<script>
import {scroller} from 'vue-scrollto/src/scrollTo'
const firstScrollTo = scroller()

export default {
  name: 'Bne',
  mounted() {
    firstScrollTo('#app')
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/global.scss';

.mar-top{
  margin-top: 15px;
}
.head-title{
  color: white;
  background-color: rgba($secondary-color, .8);
}
.head-subline{
  background-color: $accent;
}
</style>
