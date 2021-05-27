var admin = require("firebase-admin");

var serviceAccount = require("./FSprivatKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function getDB() {   //C
  return admin.firestore()
}

module.exports = getDB //C