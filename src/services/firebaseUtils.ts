import { ref, set, get, onValue, off, remove } from "firebase/database";
import { database } from "./firebaseConfig";

export const storeData = (path: string, data: unknown) => {
  const dbRef = ref(database, path);
  set(dbRef, data)
    .then(() => {
      console.log("Data stored successfully");
    })
    .catch((error) => {
      console.error("Error storing data:", error);
    });
};

export const retrieveData = (path: string | undefined) => {
  const dbRef = ref(database, path);
  return get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error("No data available");
    }
  });
};

export const listenForTasks = (callback: (data: any) => void) => {
  const dbRef = ref(database, "tasks");
  onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback(null);
    }
  });
  return () => off(dbRef);
};

export const removeData = (path: string) => {
  const dbRef = ref(database, path);
  return remove(dbRef)
    .then(() => {
      console.log("Data removed successfully");
    })
    .catch((error) => {
      console.error("Error removing data:", error);
    });
};
