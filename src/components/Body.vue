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
      .md-layout.md-alignment-center-center(v-if='product_tags[lang] && catalog_info[lang]')
        md-chip.mar-top(md-clickable, @click='changeCat(prod.id)', v-for='prod in product_tags[lang]', :key='prod.id', :class='prod.id == cat_id ? "md-primary" : "md-accent"') {{prod.title}}
      .catalog-prods
        .md-layout.md-gutter.md-alignment-center-center(v-if='loadingCat')
          .md-layout-item.text-center
            h2.loading.niconne Southern Lands
            h3.loading {{ lang == 'es' ? 'Cargando productos...' : 'Loading products...' }}
        .md-layout.md-gutter.md-alignment-center-center.loaded(v-if='!loadingCat')
          .md-layout-item.md-medium-size-33.md-large-size-25.md-small-size-50.md-xsmall-size-100(v-for='(item, key) in selected_prods', :key='key', md-with-hover)
            md-card.md-primary.product-card
              md-card-media-cover(md-text-scrim)
                md-card-media
                  img(v-if='!item.image', src='@/assets/img/no-media.jpg')
                  img(v-else, v-bind:src='item.image', :alt='item.name')
                md-card-area
                  md-card-header
                    span.md-title {{item.name}}
                    //- span.md-subhead {{item.name}}
                  //- md-card-actions
                  //-   md-button.md-icon-button
                  //-     md-icon book
  section.contact#contact
    .container
      .md-layout.md-gutter.md-alignment-center-center
        .md-layout-item.md-small-size-100
          .md-layout-item.text-center(v-if='sending')
            md-progress-spinner.md-primary(:md-diameter='100', :md-stroke='3', md-mode='indeterminate')
          .md-layout(v-if='!sending && mail_status=="OK"')
            h3.email-title {{lang == 'es' ? 'Hemos recibido su correo' : 'Your email has been sent'}}
            p.email-body {{lang == 'es' ? 'Nos contactaremos con Usted a la brevedad.' : 'We will contact you ASAP.'}}
          .md-layout(v-if='!sending && mail_error')
            h3.email-title {{lang == 'es' ? 'Ha ocurrido un error' : 'Cannot send mail'}}
            p.email-body {{lang == 'es' ? 'Por favor verifique su conexión e intente nuevamente.' : 'Please check your connection and try again'}}
          form.md-layout(novalidate, v-if='!sending && !sent')
            md-card.md-layout-item
              md-card-header
                .md-title {{contact[lang].title}}
              md-card-content
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='getValidationClass("name")')
                      label(for='name') {{contact[lang].name}}
                      md-input(v-model.lazy='$v.email.name.$model', name='name', id='name')
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                  .md-layout-item
                    md-field(:class='getValidationClass("email")')
                      label(for='email') {{contact[lang].email}}
                      md-input(v-model.lazy='$v.email.email.$model', name='email', id='email')
                      span.md-error {{lang == 'es' ? 'Por favor ingrese un email válido' : 'Please enter a valid email.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='getValidationClass("subject")')
                      label(for='subject') {{contact[lang].subject}}
                      md-input(v-model.lazy='$v.email.subject.$model', name='subject', id='subject')
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-field(:class='getValidationClass("body")')
                      label(for='body') {{contact[lang].body}}
                      md-textarea(v-model.lazy='$v.email.body.$model', name='body', id='body', type='textarea', md-autogrow)
                      span.md-error {{lang == 'es' ? 'Por favor complete este campo' : 'Please fill out this field.'}}
                .md-layout.md-gutter
                  .md-layout-item
                    md-button.md-raised.md-primary(@click='sendMail()', :disabled='$v.email.$invalid') Enviar
        .md-layout-item.md-small-size-100
          GmapMap.map(:center='{lat:-33.4235464, lng:-70.6206422}', :zoom='17', :options='{styles: mapOptions}' map-type-id='terrain')
            GmapMarker(:position='{lat:-33.4235509, lng:-70.6184535}', :clickable='true', :draggable='true', :icon='{ url: require("@/assets/img/cherry-logo.svg")}')
</template>

<script>
import { db } from '@/firebase'
import { mapGetters } from 'vuex'
import mapStyles from '@/config/mapStyles'
import __ from 'lodash'
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength
  } from 'vuelidate/lib/validators'

import emailjs from 'emailjs-com'

import firebase from 'firebase/app'
import 'firebase/storage'

const storageRef = firebase.app().storage().ref('products')
export default {
  name: 'Body',
  mixins: [validationMixin],
  mounted() {
    this.mapOptions = mapStyles.style
    this.$bind('us', db.collection('sections').doc('us'))
    this.$bind('contact', db.collection('sections').doc('contact'))
    this.$bind('catalog_info', db.collection('catalog').doc('info'))
    this.$bind('products', db.collection('catalog').doc('products'))
    this.$bind('product_tags', db.collection('catalog').doc('product-tags'))
      .then( () => {
        this.loading = false
        this.changeCat(this.cat_id)
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
      loadingCat: true,
      us: {},
      selected_prods: {},
      catalog_info: {},
      product_tags: {},
      email: {
        name: null,
        email: null,
        subject: null,
        body: null
      },
      message: {},
      products: {},
      contact: {},
      sending: false,
      sent: false,
      hasMessages: false,
      mail_error: null,
    }
  },
  validations: {
    email: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      subject: {
        required,
        minLength: minLength(4)
      },
      body: {
        required,
        minLength: minLength(4)
      }
    }
  },
  computed: {
    ...mapGetters('lang', ['lang']),
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.email[fieldName]
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    changeCat(cat_id) {
      this.cat_id = cat_id
      this.filteredProds(cat_id)
      const catKey = __.findIndex(this.product_tags[this.lang], (o) => { return o.id == cat_id })
      this.$ga.event({
        eventCategory: 'Products',
        eventAction: 'click',
        eventLabel: 'View category',
        eventValue: this.product_tags[this.lang][catKey].title
      })
    },
    filteredProds(cat) {
      this.loadingCat = true
      const filteredArr = __.filter(this.products[this.lang], (o) => { return o.cat_id == cat })
      let itemsProcessed = 0
      filteredArr.forEach( (value) => {
        const imageStore = storageRef.child(`${value.id}.jpg`)
        imageStore.getDownloadURL().then( (url) => {
          value.image = url
          itemsProcessed++
          if ( itemsProcessed ===  filteredArr.length ) {
            this.selected_prods = filteredArr
            this.loadingCat = false
          }
        })
      })
    },
    sendMail() {
      if (!this.$v.email.$invalid) {
        this.sending = true
        emailjs.send('sendgrid','southernlands_contact', this.email, process.env.VUE_APP_EMAILJS_USER_ID)
        .then((response) => {
          this.sending = false
          this.sent = true
          this.mail_status = response.text
        }, (err) => {
          this.sending = false
          this.mail_error = err
          this.sent = false
        })
      }
    }
  },
  watch: {
    'lang': {
      deep: true,
      handler () {
        this.changeCat(this.cat_id)
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
.mar-top{
  margin-top: 5px;
}
h2.loading{
  color: lighten($dark-grey, 55);
  font-size: 50px;
}
h3.loading{
  color: lighten($dark-grey, 55);
  font-size: 15px;
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
      // width: 240px;
      margin: 4px;
      display: inline-block;
      vertical-align: top;
    }
    .catalog-prods{
      margin: 30px 0;
      min-height: 200px;
      .md-card{
        min-height: 80px;
      }
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
