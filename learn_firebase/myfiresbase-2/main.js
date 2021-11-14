// const { initializeApp } = require("firebase-admin/app");

// initializeApp({
//   databaseURL: "https://<myfirebase>.firebaseio.com",
// });

// app = initializeApp();

// console.log(app);

var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./myfirebase-c9bef-firebase-adminsdk-rysex-f2fcdc2931.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myfirebase.firebaseio.com",
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.firestore();
// var ref = db.ref("restricted_access/secret_document");

db.collection("persons")
  .get()
  .then((snapshot) => {
    console.log("hello");

    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch((err) => {
    console.log("Error getting documents", err);
  });

// db.collection("users")
//   .get()
//   .then((snapshot) => {
//     console.log(snapshot);
//   })
//   .catch((err) => {
//     console.log("Erros getting documents", err);
//   });

// ref.once("value", function (snapshot) {
//   console.log(snapshot.val());
// });
