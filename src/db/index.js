import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU3BYiIfx46nZTZVrty85u8T63xwv8NBg",
  authDomain: "react-bulletinboard.firebaseapp.com",
  databaseURL: "https://react-bulletinboard.firebaseio.com",
  projectId: "react-bulletinboard",
  storageBucket: "react-bulletinboard.appspot.com",
  messagingSenderId: "26874429012",
  appId: "1:26874429012:web:49ab1c9aff338fe6afb7c1",
  measurementId: "G-WQFCSL0GHS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = firebase.firestore();
export const dbChannels = db.collection('channels');
export const getMessagesInCollection = (channelId) => {
  return db.collection(`channels/${channelId}/messages`)
};