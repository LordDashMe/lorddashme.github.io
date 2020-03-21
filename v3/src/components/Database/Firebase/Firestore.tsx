import firebase from 'firebase/app';
import 'firebase/firestore';

export default class Firestore {
  
  public static readonly FIRESTORE_CONFIG = {
    projectId: "lorddashme-website"
  };

  private static firestoreInstance: any = null;

  public static initialize(): void {

    if (! Firestore.firestoreInstance) {
      if (! firebase.apps.length) {
        firebase.initializeApp(Firestore.FIRESTORE_CONFIG);
      }
      Firestore.firestoreInstance = firebase.firestore();
    }
  }

  public static clearInstance(): any {
    Firestore.firestoreInstance = null;
  }

  public static getInstance(): any {
    return Firestore.firestoreInstance;
  }
}
