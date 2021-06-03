import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

/*
    # run locally (hits prod):
    firebase emulators:start
    tsc -w # in functions dir
    # deploy
    firebase deploy
*/

admin.initializeApp();

// export const migrate = functions.https.onRequest(async (req, res) => {
//   const db = admin.database();
//   const snapshot = await db.ref("/").get();
//   db.ref("/new").set(snapshot.toJSON());
//   db.ref("/old").remove();
// });

export const getBoops = functions.https.onRequest(async (req, res) => {
  const db = admin.database();
  const snapshot = await db.ref("/").get();
  res.send(snapshot.toJSON());
});

export const boop = functions.https.onRequest(async (req, res) => {
  const project = req.query.project;
  const pageId = req.query.id;
  const link = req.query.link;
  const booper = req.query.booper;

  const db = admin.database();
  const baseRef = project ? "/" + project : "";

  /**
   * really?
   * @param {string} key wow
   */
  function increment(key: string) {
    const ref = db.ref(baseRef + key);
    ref.transaction((count) => (count || 0) + 1);
  }

  if (link) {
    increment(`/beepsByPage/${pageId}/${link}`);
    increment("/beeps");
  } else {
    if (pageId) {
      increment(`/boopsByPage/${pageId}`);
    }
    if (booper) {
      const booperContents = await db.ref(`${baseRef}/boopsByBooper/${booper}`).get();
      if (!booperContents.exists()) {
        increment("/uniqueBoopers");
      }
      increment(`/boopsByBooper/${booper}`);
    }

    increment("/boops");

    const date = (new Date()).toISOString().substr(0, 10);
    increment(`/boopsByDay/${date}`);
    increment(`/boopsByMonth/${date.substr(0, 7)}`);
  }

  res.send("ok");
});
