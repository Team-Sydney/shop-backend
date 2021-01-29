// const admin = require('./firebaseConfig');

const admin = require('firebase-admin');
const serviceAccount = require("../../cert/service-account.json");

if(admin.apps.length === 0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
// Send a message to the device corresponding to the provided registration token.
module.exports = (token, msg) => {
  
  let message = {
    data: {
      msg: msg,
      time: '2:45'
    },
    // Union field target can be only one of the following:
    // token: string,
    // topic: string,
    // condition: string
    token: token
  };
  admin.messaging().send(message)
    .then((response) => {
    // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
    console.log('Error sending message:', error);
    });
  }