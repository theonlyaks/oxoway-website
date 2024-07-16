import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmL50JWMLIYpwlPVtOT8CqiMAgBaHTAGM",
//   authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "oxoway-app",
  storageBucket: "oxoway-app.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "137868475801"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);