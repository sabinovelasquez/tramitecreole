<template lang='pug'>
.cont(v-if='!loading')
  section.us#us
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100.us-av
          img(src='@/assets/img/us-av.png', alt='Us')
          p.text-center.italic.md-primary {{us[lang].underimg}}
        .md-layout-item.md-small-size-100(v-if='us[lang]')
          h2.title {{us[lang].title}}
          p(v-for='item in us[lang].content') {{item}}
  section.catalog#catalog
    .container
      .md-layout.md-alignment-center-center
        .md-layout-item
          h2.title {{catalog_info[lang].title}}
          md-icon book
      .md-layout.md-alignment-center-center(v-if='product_tags[lang] && catalog_info[lang]')
        //- md-chip.md-primary(md-clickable) {{catalog_info[lang].all}}
        md-chip(md-clickable, @click='changeCat(prod.id)', v-for='prod in product_tags[lang]', :key='prod.id', :class='prod.id == cat_id ? "md-primary" : "md-accent"') {{prod.title}}
      .catalog-prods.md-layout.md-alignment-center-center
        md-card.md-primary.product-card(v-for='(item, key) in products[lang][cat_id].items', :key='key', md-with-hover)
          md-card-media-cover(md-solid)
            md-card-media
              img(src='@/assets/img/no-media.jpg', alt='No-media')
            md-card-area
              md-card-header
                //- span.md-title {{item}}
                span.md-subhead {{item}}
              //- md-card-actions
              //-   md-button.md-icon-button
              //-     md-icon book
  section.contact#contact
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100
          .md-layout(v-if='sent && mail_status=="OK"')
            h3.email-title {{lang == 'es' ? 'Hemos recibido su correo' : 'Your email has been sent'}}
            p.email-body {{lang == 'es' ? 'Nos contactaremos con Usted a la brevedad.' : 'We will contact you ASAP.'}}
          .md-layout(v-if='sent && mail_error')
            h3.email-title {{lang == 'es' ? 'Ha ocurrido un error' : 'Cannot send mail'}}
            p.email-body {{lang == 'es' ? 'Por favor verifique su conexión e intente nuevamente.' : 'Please check your connection and try again'}}
          form.md-layout(v-if='!sent')
            md-card.md-layout-item
              md-card-header
                .md-title {{contact[lang].title}}
              md-card-content
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='messageClass')
                      label(for='first-name') {{contact[lang].name}}
                      md-input(v-model='email.name', name='first-name')
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                  .md-layout-item
                    md-field(:class='messageClass')
                      label(for='first-name') {{contact[lang].email}}
                      md-input(v-model='email.email', name='email')
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='messageClass')
                      label(for='subject') {{contact[lang].subject}}
                      md-input(v-model='email.subject', name='subject')
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='messageClass')
                      label(for='body') {{contact[lang].body}}
                      md-textarea(v-model='email.body', name='body', type='textarea', md-autogrow)
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-button.md-raised.md-primary(@click='sendMail()') Enviar
        .md-layout-item.md-small-size-100
          GmapMap.map(:center='{lat:-33.4235464, lng:-70.6206422}', :zoom='17', :options='{styles: mapOptions}' map-type-id='terrain')
            GmapMarker(:position='{lat:-33.4235509, lng:-70.6184535}', :clickable='true', :draggable='true', :icon='{ url: require("@/assets/img/cherry-logo.svg")}')
</template>

<script>
import { db } from '@/firebase'
import { mapGetters } from 'vuex'
import mapStyles from '@/config/mapStyles'

import emailjs from 'emailjs-com'

export default {
  name: 'Body',
  mounted() {
    this.mapOptions = mapStyles.style
    this.$bind('us', db.collection('sections').doc('us'))
    this.$bind('contact', db.collection('sections').doc('contact'))
    this.$bind('catalog_info', db.collection('catalog').doc('info'))
    this.$bind('product_tags', db.collection('catalog').doc('product-tags'))
      .then( () => {
        this.loading = false
      })
      .catch((error) => {
        this.error = error
      })
  },
  data() {
    return {
      cat_id: 0,
      mail_status: null,
      mapOptions: [],
      loading: true,
      us: {},
      catalog_info: {},
      product_tags: {},
      email: {},
      message: {},
      products: {
        es: [
          {
            id: '0',
            items: [
              'Nueces',
              'Almendras'
            ]
          },
          {
            id: '1',
            items: [
              'Ciruela',
              'Uva Pasa',
              'Huesillos'
            ]
          },
          {
            id: '2',
            items: [
              'Mora',
              'Arándano',
              'Frutilla',
              'Frambuesa',
              'Uva',
              'Kiwi'
            ]
          },
          {
            id: '3',
            items: [
              'Frutilla',
              'Mora',
              'Frambuesa',
              'Arándano'
            ]
          }
        ],
        en: [
          {
            id: '0',
            items: [
              'Walnut',
              'Almond'
            ]
          },
          {
            id: '1',
            items: [
              'Cherry',
              'Grape',
              'Raisin',
              'Huesillos'
            ]
          },
          {
            id: '2',
            items: [
              'Blackberry',
              'Blueberry',
              'Strawberry',
              'Raspberry',
              'Grape',
              'Kiwi'
            ]
          },
          {
            id: '3',
            items: [
              'Strawberry',
              'Blackberry',
              'Raspberry',
              'Blueberry'
            ]
          }
        ]
      },
      contact: {},
      sent: false,
      hasMessages: false,
      mail_error: null,
    }
  },
  computed: {
    ...mapGetters('lang', ['lang']),
    messageClass() {
      return {
        'md-invalid': this.hasMessages
      }
    }
  },
  methods: {
    changeCat(cat_id) {
      this.cat_id = cat_id
    },
    sendMail() {
      if (this.email.length > 3) {
        emailjs.send('sendgrid','southernlands_contact', this.email, process.env.VUE_APP_EMAILJS_USER_ID)
        .then((response) => {
          this.sent = true
          this.mail_status = response.text
        }, (err) => {
          this.sent = true
          this.mail_error = err
        })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/global.scss';

.email-body{
  width: 100%;
}
h3.email-title{
  width: 100%;
  color: $primary-color;
}
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
    .product-card {
      width: 240px;
      margin: 4px;
      display: inline-block;
      vertical-align: top;
    }
    .catalog-prods{
      margin: 30px 0;
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
