import {
  getFirestore, collection, addDoc, getDocs, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
// eslint-disable-next-line import/no-unresolved
import { app } from './config.js';

const db = getFirestore(app);

const dbRef = collection(db, 'post');
export const save = (post) => addDoc(dbRef, post, { post });

export const data = () => getDocs(collection(db, 'post'));

/*const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data());
});*/
