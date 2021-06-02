import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// https://firebase.google.com/docs/functions/typescript

export const boop = functions.https.onRequest((req, res) => {
  const db = admin.database();
  const pageId = req.query.id;
  const link = req.query.link;

  if (link) {
    const beepsByPage = db.ref("/beepsByPage/" + pageId + "/" + link);
    beepsByPage.transaction((current) => {
      return (current || 0) + 1;
    });
    const beepsRef = db.ref("/beeps");
    beepsRef.transaction((current) => {
      return (current || 0) + 1;
    });
  } else {
    if (pageId) {
      const boopsByPageRef = db.ref("/boopsByPage/" + pageId);
      boopsByPageRef.transaction((current) => {
        return (current || 0) + 1;
      });
    }

    const boopsRef = db.ref("/boops");
    boopsRef.transaction((current) => {
      return (current || 0) + 1;
    });
  }

  res.send("ok");
});
