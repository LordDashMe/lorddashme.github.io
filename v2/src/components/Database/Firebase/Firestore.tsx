import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  projectId: "lorddashme-website"
};

firebase.initializeApp(config);

const Firestore = firebase.firestore();

export default Firestore;