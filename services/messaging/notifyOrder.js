const admin = require('firebase-admin');
const serviceAccount = require("../../certs/service-account.json");
// Only initiate firebase once
if(admin.apps.length === 0){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
// Send a message to the device corresponding to the provided registration token.
module.exports = (token, msg) => {
/**
 * Token solution is temporary, using the uid to create topics and subscribe
 * to them seems like a better option 
 */
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