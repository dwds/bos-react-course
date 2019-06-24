import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNDn-EJXINLgSRp1puy0CjUhjzplupA8U",
  authDomain: "catch-of-the-day-dwds.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dwds.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
