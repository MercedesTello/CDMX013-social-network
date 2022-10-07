/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  // eslint-disable-next-line max-len
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth(app);

// eslint-disable-next-line max-len
export const createUser = (email, password) => (createUserWithEmailAndPassword(auth, email, password));
export const logUser = (email, password) => (signInWithEmailAndPassword(auth, email, password));
// autenticar con google
const provider = new GoogleAuthProvider();

export const verCtaG = () => signInWithPopup(auth, provider);

export const logOut = () => (signOut(auth));
