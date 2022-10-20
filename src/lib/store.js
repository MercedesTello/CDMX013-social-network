/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

const dbRef = collection(db, 'post');

export const save = (post) => addDoc(dbRef, (post));

export const data = (id) => getDocs(collection(db, 'post'), id);

export const onGetPost = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

export const getPost = (id) => getDoc(doc(db, 'post', id));

export const updatePost = (id, newPost) => updateDoc(doc(db, 'post', id), newPost);
