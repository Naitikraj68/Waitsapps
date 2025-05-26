import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo_Ug-v80QdFcwgJY5Q6ggr9VSVyoH3SU",
  authDomain: "dosti-6950f.firebaseapp.com",
  projectId: "dosti-6950f",
  storageBucket: "dosti-6950f.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };￼Enter
