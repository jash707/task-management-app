import { ref, set, get } from "firebase/database";
import { database } from "./firebaseConfig";

// Store data function
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
