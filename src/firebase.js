import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
            apiKey: "AIzaSyDYUFGLZlsDwnDfugxoiT5KG1Ib3aNlFho",
            authDomain: "quora-clone-b7b44.firebaseapp.com",
            projectId: "quora-clone-b7b44",
            storageBucket: "quora-clone-b7b44.appspot.com",
            messagingSenderId: "385281474791",
            appId: "1:385281474791:web:bcf6eff088a9aea2426242",
            measurementId: "G-7JJ24CEWKD"
  };
   
  // };
//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  console.log(firebaseApp);
  const auth =firebase.auth();
  // console.log(auth);
  const provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);

  const db = firebaseApp.firestore();
  // console.log(db);

  export{auth, provider};
  export default db;
