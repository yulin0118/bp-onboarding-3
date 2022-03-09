import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDhmCcc2PLuQWCum_fxYDTI54GGrI2wxII",
    authDomain: "usertracker-e8bb8.firebaseapp.com",
    projectId: "usertracker-e8bb8",
    storageBucket: "usertracker-e8bb8.appspot.com",
    messagingSenderId: "1023137893894",
    appId: "1:1023137893894:web:0663f6e8254ec083007d87",
    measurementId: "G-2X2ZVVJLDN"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore()