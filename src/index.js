import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0mZ-eb5CvhgUpU2T3qNUmegMj0LB7nLU",
  authDomain: "evernote-clone-cb364.firebaseapp.com",
  projectId: "evernote-clone-cb364",
  storageBucket: "evernote-clone-cb364.appspot.com",
  messagingSenderId: "859835753795",
  appId: "1:859835753795:web:ca2428d171518e544cbbf6",
  measurementId: "G-Q4RX9V611T"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();