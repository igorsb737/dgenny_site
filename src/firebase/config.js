import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB_doRUCrsGVSUO39M8-RaCdHyC3RdwHF8",
  authDomain: "newsletter-dgenny.firebaseapp.com",
  projectId: "newsletter-dgenny",
  storageBucket: "newsletter-dgenny.firebasestorage.app",
  messagingSenderId: "979590428196",
  appId: "1:979590428196:web:241bf34e3d5596c1290ab1"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
