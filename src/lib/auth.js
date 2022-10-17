/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import {
  // eslint-disable-next-line max-len
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

export const auth = getAuth(app);
export const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;

  const uid = user.uid;
}
// eslint-disable-next-line max-len
export const createUser = (email, password) => (createUserWithEmailAndPassword(auth, email, password));
export const logUser = (email, password) => (signInWithEmailAndPassword(auth, email, password));
// autenticar con google
const provider = new GoogleAuthProvider();

export const verCtaG = () => signInWithPopup(auth, provider);

export const logOut = () => (signOut(auth));
