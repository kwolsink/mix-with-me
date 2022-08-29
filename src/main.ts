//vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAn_JQiEuAgEkfOnBp1e_fdtbLErHACpk",
  authDomain: "mix-with-me.firebaseapp.com",
  projectId: "mix-with-me",
  storageBucket: "mix-with-me.appspot.com",
  messagingSenderId: "740385971274",
  appId: "1:740385971274:web:7e65788e913ba419645ab3",
  measurementId: "G-LZ1J9TZBRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

createApp(App).mount('#app')
