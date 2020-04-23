import firebase from './firebase';
import { FIREBASE_STATUS_REF, FIREBASE_CONNECTED_REF } from './constant';

const database = firebase.database();
const statusRef = database.ref(FIREBASE_STATUS_REF);
const connectedRef = database.ref(FIREBASE_CONNECTED_REF);

export const updateStatusUser = (_id) => { 
  connectedRef.on('value', (snapshot) => {
    if (snapshot.val()) {
      const connection = statusRef.child(_id);
      connection.onDisconnect().set({
        status: 'offline',
        lastOnline: firebase.database.ServerValue.TIMESTAMP,
      });
      document.onvisibilitychange = e => {
        if (document.visibilityState === 'hidden') {
          connection.set({
            status: 'away',
            lastOnline: firebase.database.ServerValue.TIMESTAMP,
          });
        } else {
          connection.set({
            status: 'online',
          });
        }
      };
    }
  });
};
