import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1YAru4ANhqly8HSCudawVA85AqBBcDCQ",
  authDomain: "app-3a4e1.firebaseapp.com",
  projectId: "app-3a4e1",
  storageBucket: "app-3a4e1.appspot.com",
  messagingSenderId: "711162085259",
  appId: "1:711162085259:web:2264ec6aecce143fc1b98e",
  databaseURL: "https://app-3a4e1-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);