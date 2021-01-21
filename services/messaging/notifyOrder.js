const firebase = require('firebase/app');
// require('firebase/messaging');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: "myapp-project-123.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
}

firebase.initializeApp(firebaseConfig);

module.exports = {messaging(){ firebase.messaging()}}


messaging.getToken({vapidKey: process.env.FIREBASE_VAPID_KEY}).then( currentToken =>{
  
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
