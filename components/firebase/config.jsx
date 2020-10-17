import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKuZHHX3PfVnmqwy7_9EwjuARF8O_jA30",
    /*    authDomain: "fir-3504.firebaseapp.com",
        databaseURL: "https://fir-3504.firebaseio.com",*/
    projectId: "fir-3504",
    storageBucket: "fir-3504.appspot.com",
    /*    messagingSenderId: "768882474263",*/
    appId: "1:768882474263:web:417ef5df9d002d041b8b52",
    /*    measurementId: "G-WGGBYL71J8*/
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };