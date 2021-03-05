import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyDcokYpoT7b5KYu-5343GRArDlrb6p3bUM",
    authDomain: "netflix-clone-b55ec.firebaseapp.com",
    projectId: "netflix-clone-b55ec",
    storageBucket: "netflix-clone-b55ec.appspot.com",
    messagingSenderId: "679912699258",
    appId: "1:679912699258:web:18dd60841714d6416652c3"
  };



const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth()

export {auth} 
export default db