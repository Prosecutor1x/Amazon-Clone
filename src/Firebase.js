import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzUoIxLYYDo_RgMWd5-CIHO-0q986YtNs",
  authDomain: "clone-e2dc6.firebaseapp.com",
  projectId: "clone-e2dc6",
  storageBucket: "clone-e2dc6.appspot.com",
  messagingSenderId: "557323932863",
  appId: "1:557323932863:web:8433225137a3068520e20a",
  measurementId: "G-38QRVXNZH8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);