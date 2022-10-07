// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhQTUiRttzzlRNo3U6Qk-HjgjvwlDkdbU',
  authDomain: 'taquiero-mucho.firebaseapp.com',
  projectId: 'taquiero-mucho',
  storageBucket: 'taquiero-mucho.appspot.com',
  messagingSenderId: '276946103329',
  appId: '1:276946103329:web:c2b61fa4802d9ff8af8760',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
