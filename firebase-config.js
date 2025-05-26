import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo_Ug-v80QdFcwgJY5Q6ggr9VSVyoH3SU",
  authDomain: "dosti-6950f.firebaseapp.com",
  projectId: "dosti-6950f",
  storageBucket: "dosti-6950f.firebasestorage.app",
  messagingSenderId: "493956063524",
  appId: "1:493956063524:web:83e2cf8af5c07ef8fd13b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };