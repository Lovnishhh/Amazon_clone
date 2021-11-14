import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCCnlkDLmcQci6lEtpFLRZdwIO8ysepfMI",
    authDomain: "fir-f0b31.firebaseapp.com",
    projectId: "fir-f0b31",
    storageBucket: "fir-f0b31.appspot.com",
    messagingSenderId: "196474674476",
    appId: "1:196474674476:web:a988563915ba3cdf2aa089",
    measurementId: "G-87BPYF9FK9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();

export { auth };