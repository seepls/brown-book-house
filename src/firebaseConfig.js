import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbyyX1wWYs6fC-7yxKKQOlBMKVX3VcE-c",
  authDomain: "brownbookhouse.firebaseapp.com",
  databaseURL: "https://brownbookhouse.firebaseio.com",
  projectId: "brownbookhouse",
  storageBucket: "brownbookhouse.appspot.com",
  messagingSenderId: "810809839123",
  appId: "1:810809839123:web:a1d561bd98a2ebdb45f9e6"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

