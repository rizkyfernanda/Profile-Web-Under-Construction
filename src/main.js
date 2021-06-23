import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD9zIIQMB1nrhgrApggaI4ulgWx5JnVNNA",
  authDomain: "fauzisstuff.firebaseapp.com",
  projectId: "fauzisstuff",
  storageBucket: "fauzisstuff.appspot.com",
  messagingSenderId: "441155640062",
  appId: "1:441155640062:web:608ea6bf496d35544223af",
  measurementId: "G-T8Q6HLK8PJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
