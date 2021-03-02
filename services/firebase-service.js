import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: '../certs/GOOGLE_APPLICATION_CREDENTIALS.json'
});

export default admin
