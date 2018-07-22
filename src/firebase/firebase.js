import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database(); 

export { firebase, database as default };

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added (fires once for all data already at that location then for new expenses)
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// // .on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 104500,
// //   createdAt: 0
// // });

// // database.ref('notes/-LHyljdmDs3GtR6Q-sc4').remove();

// // database.ref('notes').push({
// //   title: 'To Do #2',
// //   body: 'Go for a run #2'
// // });



// // const firebaseNotes = {
// //   notes: {
// //     '12': {
// //       title: 'First Note',
// //       body: 'this is my note'
// //     },
// //     '13': {
// //       title: 'Another Note',
// //       body: 'this is another note'
// //     }
// //   }
// // }

// // const notes = [{
// //   id: '12',
// //   title: 'First Note',
// //   body: 'this is my note'
// // },
// // {
// //   id: '13',
// //   title: 'Another Note',
// //   body: 'this is another note'
// // }];

// // database.ref('notes').set(notes);

// // database.ref().set({
// //   name: 'Kevin',
// //   age: 49,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'FND'
// //   },
// //   location: {
// //     city: "Toronto",
// //     country: "Canada"
// //   }
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((e) => {
// //   console.log('this failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'location/city': 'Seattle',
// //   'job/company': 'Amazon' 
// // }).then(() => {
// //   console.log('data is updated');
// // }).catch((e) => {
// //   console.log('this failed', e);
// // });

// // Fetch data a single time
// // Subscribe to data

