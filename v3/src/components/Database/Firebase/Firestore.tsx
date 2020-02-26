import firebase from 'firebase/app';
import 'firebase/firestore';

export default class Firestore {
  
  public static readonly FIRESTORE_CONFIG = {
    projectId: "lorddashme-website"
  };

  private static firestoreInstance: any = null;

  public static initialize(): void {

    if (! firebase.apps.length && ! Firestore.firestoreInstance) {
      firebase.initializeApp(Firestore.FIRESTORE_CONFIG);
      Firestore.firestoreInstance = firebase.firestore();
    }
  }

  public static getInstance(): any {
    
    return Firestore.firestoreInstance;
  }
}
