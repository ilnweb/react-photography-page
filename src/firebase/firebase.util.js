import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAYa3QP_DsSspmSoPvrrCEW_bmP_pUxm8s",
  authDomain: "iliyantsachevphotography.firebaseapp.com",
  databaseURL: "https://iliyantsachevphotography.firebaseio.com",
  projectId: "iliyantsachevphotography",
  storageBucket: "iliyantsachevphotography.appspot.com",
  messagingSenderId: "204485303860",
  appId: "1:204485303860:web:bb37244f9efbb5886c7461",
  measurementId: "G-1B8KMD9RWQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const storage = firebase.storage();
export const storageRef = storage.ref();

// Create a reference to the file we want to download
var imageRef = storageRef.child('Portrait/');

// Get the download URL
export const image = imageRef.getDownloadURL().then(function(url) {
  console.log(url);
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

  }
});