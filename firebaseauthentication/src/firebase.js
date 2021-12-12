import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'process.env.REACT_APP_API_KEY',
  authDomain: '<REACT_APP_AUTH_DOMAIN>',
  projectId: '<REACT_APP_PROJECT_ID>',
  storageBucket: '<REACT_APP_STORAGE_BUCKET>',
  messagingSenderId: '<REACT_APP_MESSAGE_SENDER_ID>',
  appId: 'process.env.REACT_APP_PROJECT_ID',
  measurementId: 'REACT_APP_MEASUREMENT_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
