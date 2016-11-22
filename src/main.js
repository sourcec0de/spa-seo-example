import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import VueFire from 'vuefire'
import router from './router'

firebase.initializeApp({
  apiKey: 'AIzaSyDb2cWGNC7EVL7Q9NmVygpHyjHWGZ9Z3zo',
  authDomain: 'spa-seo-example.firebaseapp.com',
  databaseURL: 'https://spa-seo-example.firebaseio.com',
  storageBucket: 'spa-seo-example.appspot.com',
  messagingSenderId: '284383581982'
})

Vue.use(VueFire)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})
