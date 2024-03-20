import { useEffect, useState } from "react";
import {PathData} from "./writeDataToFirebase.ts";
import {
  getDatabase,
  ref,
  onValue,
  off,
  DataSnapshot,
} from "firebase/database";


export const useFirebaseData = (
  path: PathData,
): any => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const database = getDatabase();
    const dataRef = ref(database, `${path}`);

    const onDataChange = (snapshot: DataSnapshot) => {
      try {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setData(Object.values(data) as any);
        } else {
          setData(null);
        }
      } catch (error) {
        console.log("Error fetching data from Firebase:", error);
      }
    };

    onValue(dataRef, onDataChange);

    return () => {
      off(dataRef, "value", onDataChange);
    };
  }, [path]);

  return data;
};