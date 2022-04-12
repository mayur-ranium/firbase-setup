import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./Router/index"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDt_A5W9ksnrGAbaALAG5cjWYXCYgE7HT8",
    authDomain: "app-lab-f5784.firebaseapp.com",
    projectId: "app-lab-f5784",
    storageBucket: "app-lab-f5784.appspot.com",
    messagingSenderId: "478223434415",
    appId: "1:478223434415:web:766dc68dd6f73abbe74a5a",
    measurementId: "G-29VTX08VE8"
  };

  const app = initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
