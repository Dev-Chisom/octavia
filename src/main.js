import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from 'vue-notification'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Notifications)


const firebaseConfig = {
  apiKey: "AIzaSyBi1IIYRFzo1vXv-PMN6A8CQD6VJ0MBYgE",
  authDomain: "octavia-f6f9b.firebaseapp.com",
  projectId: "octavia-f6f9b",
  storageBucket: "octavia-f6f9b.appspot.com",
  messagingSenderId: "978631906055",
  appId: "1:978631906055:web:bc74ed412eeabff5022ba2"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
