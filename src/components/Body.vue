<template lang='pug'>
.cont
  section.us
    .container
      .md-layout.md-alignment-center-center
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
}
</style>
