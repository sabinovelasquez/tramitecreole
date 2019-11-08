<template lang='pug'>
  section
    header.bg
      .shadow
      .container.md-layout.md-alignment-center
        .md-layout-item
          h1 Item
    .nav-bar
      .container
        md-menu(md-direction='bottom-start')
          md-button(md-menu-trigger) Nosotros
          md-button(md-menu-trigger) Catálogo
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang='scss'>
.nav-bar{
  background-color: #1A1A1A;
}
header.bg{
  min-height: 360px;
  background: linear-gradient(
    rgba(0, 0, 0, 1), 
  rgba(0, 0, 0, 0)
  ),
  url('../assets/img/bg-1.jpg');
  background-size: cover;
  background-position: center;
}

</style>