import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtpXzeodyuzmKXq70_iYpBGsESOzwcjc",
  authDomain: "mdqstore-e86f4.firebaseapp.com",
  projectId: "mdqstore-e86f4",
  storageBucket: "mdqstore-e86f4.appspot.com",
  messagingSenderId: "400402232159",
  appId: "1:400402232159:web:b0b3df9eb2cd7c6946bcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
    <App />
  /*</React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
