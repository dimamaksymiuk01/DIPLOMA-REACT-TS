import { ref, remove } from "firebase/database";
import {PathData} from "./writeDataToFirebase.ts";
import {dataBase} from "./config.ts";

export const deleteDataFromFirebase = async (
  path: PathData,
  key: string | null
) => {
  try {
    const databaseRef = ref(
      dataBase,
      `${path}/${key}`
    );
    await remove(databaseRef);
    // console.log("Object deleted successfully.");
  } catch (error: any) {
    console.error("Error deleting object: ", error.message);
  }
};