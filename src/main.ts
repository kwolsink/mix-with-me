//vite
const mode = import.meta.env.MODE

//vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router'

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, connectDatabaseEmulator } from "firebase/database"
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFunctions, connectFunctionsEmulator } from "firebase/functions"
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
  measurementId: "G-LZ1J9TZBRJ",
  databaseURL: "https://mix-with-me-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(firebaseApp)
export const database = getDatabase(firebaseApp)
export const functions = getFunctions(firebaseApp)

if (mode === 'development') {
  try {
    console.warn("Running in dev mode")

    console.info("Connecting emulators")
    connectDatabaseEmulator(database, 'localhost', 9000)
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFunctionsEmulator(functions, 'localhost', 5001)
    console.info("finished emulator connections")
  } 
  catch (e) {
    console.error("An error happened while setting up the dev environement")
    console.log(e)
  }

}


createApp(App).use(Router).mount('#app')
