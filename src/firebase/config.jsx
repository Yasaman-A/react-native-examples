import * as firebase from 'firebase';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: '',
  projectId: '',
  appId: '',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
