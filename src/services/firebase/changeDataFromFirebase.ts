import { ref, update } from "firebase/database";
import { PathData } from "./writeDataToFirebase.ts";
import { dataBase } from "./config.ts";

export const changeDataFromFirebase = async (
  path: PathData,
  key: string,
  newAmount: number
) => {
  try {
    const databaseRef = ref(dataBase, `${path}/${key}`);
    const updates = {
      amount: newAmount, // Оновлюємо поле 'amount' з новим значенням
    };
    await update(databaseRef, updates);
    console.log("Data updated successfully.");
  } catch (error: any) {
    console.error("Error updating data: ", error.message);
  }
};
