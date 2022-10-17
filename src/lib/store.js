/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { auth } from './auth.js';
import { app } from './config.js';

const db = getFirestore(app);

const dbRef = collection(db, 'post');
export const save = (post) => addDoc(dbRef, post);

export const data = () => getDocs(collection(db, 'post'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deletePost = (id) => {
  getPost(id).then(result => {
    console.log('EL RESULT', result['_document'].data.value.mapValue.fields.author.stringValue);
    console.log('la user', auth.currentUser.uid);
  }).catch(error=> console.log('EL ERROR', error));
  // return deleteDoc(doc(db, 'post', id));

};
export const getPost = (id) => getDoc(doc(db, 'post', id));

export const updatePost = (id, newPost) => updateDoc(doc(db, 'post', id), newPost);
