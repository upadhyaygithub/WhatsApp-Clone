import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ82QM_QqWoi2eGX1pRCvsG5z8OCMFnLM",
    authDomain: "whatsapp-clonefinal-696f6.firebaseapp.com",
    projectId: "whatsapp-clonefinal-696f6",
    storageBucket: "whatsapp-clonefinal-696f6.appspot.com",
    messagingSenderId: "386948331981",
    appId: "1:386948331981:web:1653c0b9902bc2588c6c84"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { db }