import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4apyUP4YgvRO-U5QTUegmefO5wenw9kM",
  authDomain: "ad-company-345502.firebaseapp.com",
  projectId: "ad-company-345502",
  storageBucket: "ad-company-345502.appspot.com",
  messagingSenderId: "113690586680",
  appId: "1:113690586680:web:10a8674a251f9ae79040cd",
  measurementId: "G-E25K2Z9128",
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
