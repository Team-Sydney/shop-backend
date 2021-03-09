const admin = require('firebase-admin');

module.exports = () => {
  admin.initializeApp({
    credential: '../certs/GOOGLE_APPLICATION_CREDENTIALS.json'
  });
}