import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions'; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyDmL50JWMLIYpwlPVtOT8CqiMAgBaHTAGM",
  projectId: "oxoway-app",
  storageBucket: "oxoway-app.appspot.com",
  // You can add other config properties if you have them:
  // authDomain: "YOUR_AUTH_DOMAIN",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  // appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app); // Add this line
export default app; // Export the initialized app