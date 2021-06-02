import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// https://firebase.google.com/docs/functions/typescript

export const migrate = functions.https.onRequest(async (req, res) => {
  const db = admin.database();
  // function increment(key: string) {
  //   const ref = db.ref(key);
  //   ref.transaction((count) => (count || 0) + 1);
  // }
  // increment("/testfoobarbaz");

  const snapshot = await db.ref("/").get();
  db.ref("/laminae").set(snapshot.toJSON());
  db.ref("/beeps").remove();
  db.ref("/beepsByPage").remove();
  db.ref("/boops").remove();
  db.ref("/boopsByPage").remove();

  res.send(snapshot.toJSON());
});

export const getAll = functions.https.onRequest(async (req, res) => {
  const db = admin.database();
  const snapshot = await db.ref("/").get();
  res.send(snapshot.toJSON());
});

export const boop = functions.https.onRequest((req, res) => {
  const project = req.query.project;
  const pageId = req.query.id;
  const link = req.query.link;

  const db = admin.database();
  function increment(key: string) {
    const ref = db.ref((project ? project + "/" : "") + key);
    ref.transaction((count) => (count || 0) + 1);
  }

  if (link) {
    increment("/beepsByPage/" + pageId + "/" + link);
    increment("/beeps");
  } else {
    if (pageId) {
      increment("/boopsByPage/" + pageId);
    }
    increment("/boops");

    const date = (new Date()).toISOString().substr(0, 10);
    increment("/boopsByDay/" + date);
    increment("/boopsByMonth/" + date.substr(0, 7));
  }

  res.send("ok");
});
