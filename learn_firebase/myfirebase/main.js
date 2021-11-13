var admin = require("firebase-admin");

var serviceAccount = require("./myfirebase-c9bef-firebase-adminsdk-rysex-cc63dd1dcc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
let defaultProjectManagement = admin.projectManagement();
console.log(defaultProjectManagement);

let db = admin.firestore();
db.collection("users")
  .get()
  .then((snapshot) => {
    snapshot
      .forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  });
