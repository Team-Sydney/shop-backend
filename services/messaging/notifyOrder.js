const admin = require('firebase-admin');
const serviceAccount = require("../../cert/service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();
let token = req.body.currentToken;

let message = {
  data: {
    score: '850',
    time: '2:45'
  },
  // topic: topic,
  token: token
};
// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
.then((response) => {
  // Response is a message ID string.
  console.log('Successfully sent message:', response);
})
.catch((error) => {
  console.log('Error sending message:', error);
});