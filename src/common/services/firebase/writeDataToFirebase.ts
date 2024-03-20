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

  applecuting = "applecuting",
  samsungcuting = "samsungcuting",
  xiaomicuting = "xiaomicuting",
  redmicuting = "redmicuting",
  googlecuting = "googlecuting",
  oppocuting = "oppocuting",
  motorolacuting = "motorolacuting",
  onepluscuting = "onepluscuting",

  appleaccumulator = "appleaccumulator",
  samsungaccumulator = "samsungaccumulator",
  xiaomiaccumulator = "xiaomiaccumulator",
  redmiaccumulator = "redmiaccumulator",
  googleaccumulator = "googleaccumulator",
  oppoaccumulator = "oppoaccumulator",
  motorolaaccumulator = "motorolaaccumulator",
  oneplusaccumulator = "oneplusaccumulator",

  appledisplay = "appledisplay",
  samsungdisplay = "samsungdisplay",
  xiaomidisplay = "xiaomidisplay",
  redmiadisplay = "redmiadisplay",
  googledisplay = "googledisplay",
  oppodisplay = "oppodisplay",
  motoroladisplay = "motoroladisplay",
  oneplusdisplay = "oneplusdisplay",

  applecovers = "applecovers",
  samsungcovers = "samsungcovers",
  xiaomicovers = "xiaomicovers",
  redmicovers = "redmicovers",
  googlecovers = "googlecovers",
  oppocovers = "oppocovers",
  motorolacovers = "motorolacovers",
  onepluscovers = "onepluscovers",

  services = "services"
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