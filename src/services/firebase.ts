import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://myexpenses-6e402.firebaseio.com',
});

export default admin;
