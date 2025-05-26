imimport { db, auth, provider } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const chatSection = document.getElementById("chat-section");
const authSection = document.getElementById("auth-section");

// Register
document.getElementById("register").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password).catch(console.error);
};

// Login
document.getElementById("login").onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password).catch(console.error);
};

// Google Login
document.getElementById("googleLogin").onclick = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

// Logout
document.getElementById("logout").onclick = () => {
  signOut(auth);
};

// Auth state change
onAuthStateChanged(auth, user => {
  if (user) {
    authSection.style.display = "none";
    chatSection.style.display = "block";
    listenForMessages();
  } else {
    chatSection.style.display = "none";
    authSection.style.display = "block";
  }
});

// Send message
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;
  addDoc(collection(db, "messages"), {
    text,
    uid: auth.currentUser.uid,
    createdAt: serverTimestamp()
  });
  messageInput.value = "";
}

document.getElementById("sendBtn").onclick = sendMessage;

// Listen for new messages
function listenForMessages() {
  const q = query(collection(db, "messages"), orderBy("createdAt"));
  onSnapshot(q, snapshot => {
    chatWindow.innerHTML = "";
    snapshot.forEach(doc => {
      const msg = doc.data();
      const p = document.createElement("p");
      p.textContent = msg.text;
      if (msg.uid === auth.currentUser.uid) {
        p.classList.add("self");
      }
      chatWindow.appendChild(p);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
}￼Enter
