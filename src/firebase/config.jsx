import firebase from 'firebase/app';
import '@firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCKuZHHX3PfVnmqwy7_9EwjuARF8O_jA30',
  projectId: 'fir-3504',
  appId: '1:768882474263:web:417ef5df9d002d041b8b52',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;