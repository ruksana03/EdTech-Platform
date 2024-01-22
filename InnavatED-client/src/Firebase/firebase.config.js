import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSH_6B94yZRB-OHecysLe6naJ6FcTR0ec",
  authDomain: "innavateed.firebaseapp.com",
  projectId: "innavateed",
  storageBucket: "innavateed.appspot.com",
  messagingSenderId: "201581328830",
  appId: "1:201581328830:web:0ce9a90b2458289dcaa1ef"
};

export const app = initializeApp(firebaseConfig);