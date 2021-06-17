import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqG0PbJgxz53TyPGMtMuSVH90HDmjC_iY",
    authDomain: "netflix-clone-8e646.firebaseapp.com",
    projectId: "netflix-clone-8e646",
    storageBucket: "netflix-clone-8e646.appspot.com",
    messagingSenderId: "782248331515",
    appId: "1:782248331515:web:f4c49cdffedf14c510c85e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}
