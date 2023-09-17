import {
  ref,
  push,
  set,
  getDatabase,
  DatabaseReference,
} from "firebase/database";

export enum PathData {
  markets = "markets",
  archive = "archive",
  storage = "storage",
  spent = "spent"
}
export const setDataToFirebase = async (
  path: PathData,
  data: any,
) => {
  try {
    const database = getDatabase();
    const databaseRef: DatabaseReference = ref(
      database,
        `${path}`
    );

    const newRef = push(databaseRef);
    data.key = newRef.key;

    await set(newRef, data);
  } catch (error: any) {
    console.error(`Failed to write data to the database: ${error.message}`);
  }
};