const fs = require("firebase-admin");

const serviceAccount = require("./myfirebase-c9bef-firebase-adminsdk-rysex-f2fcdc2931.json");

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});
// // let defaultProjectManagement = admin.projectManagement();
// // console.log(defaultProjectManagement);

const db = fs.firestore();
// // const users = db.collection("persons").get();

// // console.log(users);

// db.collection("users").add({
//   name: "Anbu Selvan",
//   email: "anbu.selvan@email.com",
//   age: 25,
// });

// db.collection("users")
//   .get()
//   .then((snapshot) => {
//     console.log("hello");

//     snapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log("Error getting documents", err);
//   });

const doc = db.collection("cities").doc("SF");

const observer = doc.onSnapshot(
  (docSnapshot) => {
    console.log(`Received doc snapshot: ${docSnapshot}`);
    // ...
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);
