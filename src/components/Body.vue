<template lang='pug'>
.cont
  section.us
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100.us-av
          img(src='@/assets/img/us-av.png', alt='Us')
        .md-layout-item.md-small-size-100
          h2.title Sobre Nosotros
          p Contamos con la confianza y compromiso de nuestros productores y proveedores orientado a satisfacer los requerimientos y exigencias de cada uno de nuestros mercados.
          p Nuestro principal objetivo es entregar a nuestros clientes, con quienes hemos desarrollado importantes lazos comerciales, un servicio cordial y personalizado. Toda nuestra fruta cumple con las certificaciones y protocolos exigidos internacionalmente.
          p Apostamos por la apertura de nuevos mercados para nuestra fruta y seguir impulsando nuestro continuo crecimiento.
  section.catalog
    .container
      .md-layout.md-alignment-center-center
        .md-layout-item
          h2.title Nuestros productos
      .md-layout.md-alignment-center-center
        p Under construction...

  section.contact
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100
          form.md-layout
            md-card.md-layout-item
              md-card-header
                .md-title Contáctenos
              md-card-content
                .md-layout.md-gutter
                  .md-layout-item
                    md-field
                      label(for='first-name') Nombre - Apellido
                      md-input(name='first-name')
                      span.md-error Campo requerido
                  .md-layout-item
                    md-field
                      label(for='first-name') Email
                      md-input(name='email')
                      span.md-error Campo requerido
                .md-layout.md-gutter
                  .md-layout-item
                    md-field
                      label(for='subject') Asunto
                      md-input(name='subject')
                      span.md-error Campo requerido
                .md-layout.md-gutter
                  .md-layout-item
                    md-field
                      label(for='subject') Mensaje
                      md-textarea(name='subject', md-autogrow)
                      span.md-error Campo requerido
                .md-layout.md-gutter
                  .md-layout-item
                    md-button.md-raised.md-primary Enviar
        .md-layout-item.md-small-size-100
          GmapMap.map(:center='{lat:-33.4235464, lng:-70.6206422}', :zoom='17', map-type-id='terrain')
            GmapMarker(:position='{lat:-33.4235509, lng:-70.6184535}', :clickable='true', :draggable='true')
</GmapMap>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style scoped lang='scss'>
@import '@/assets/global.scss';

.us-av{
  img{
    margin:auto;
    display: flex;
  }
}
section{
  padding: 30px 0 60px;
  h2.title{
    margin: 0;
    @media (max-width: 960px){
      margin-top: 30px;
    }
  }
  &.us{
    background-color: $dark-grey;
    h2.title{
      color: $primary-color;
      font-size: 50px;
      font-weight: 100;
      line-height: 50px;
    }
  }
  &.catalog{
    background-color: #fbfbfb;
    color: $dark-grey;
    h2.title{
      text-align: center;
      font-weight: 100;
      line-height: 50px;
    }
  }
  &.contact{
    background-color: $dark-grey;
    .map{
      width:100%;
      height:380px;
      @media (max-width: 960px){
        margin-top: 30px;
      }
    }
  }
}
</style>
