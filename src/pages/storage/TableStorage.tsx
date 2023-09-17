import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { MyProducts } from "../../shared/types/types.ts";
import { useFirebaseData } from "../../services/firebase/getDataFromFirebase.ts";
import { PathData } from "../../services/firebase/writeDataToFirebase.ts";
import { deleteDataFromFirebase } from "../../services/firebase/deleteFromData.ts";
import { changeDataFromFirebase } from "../../services/firebase/changeDataFromFirebase.ts";
import { TotalSum } from "../../components/TotalSum.tsx";

import "../../components/style/storage.scss";

const TableStorage = () => {
  const { t } = useTranslation();
  const dataStorage: MyProducts[] = useFirebaseData(PathData.storage);
  const [searchDirect, setSearchDirect] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MyProducts[]>(dataStorage);

  const handleDelete = (id: string) => {
    deleteDataFromFirebase(PathData.storage, id).then(() => {
      // Може бути виклик модалки
    });
  };



  //функції для додавання та віднімання кількості з amount
const handleIncrementAmount = (key: string | undefined) => {
  if (key !== undefined) {
    const currentItem = filteredItems.find((item) => item.key === key);
    if (currentItem) {
      const currentAmount = Number(currentItem.amount);
      const newAmount = currentAmount + 1;
      changeDataFromFirebase(PathData.storage, key, newAmount);
    }
  }
};

const handleDecrementAmount = (key: string | undefined) => {
  if (key !== undefined) {
    const currentItem = filteredItems.find((item) => item.key === key);
    if (currentItem) {
      const currentAmount = Number(currentItem.amount);
      if (currentAmount > 0) {
        const newAmount = currentAmount - 1;
        changeDataFromFirebase(PathData.storage, key, newAmount);
      } else {
        // Якщо amount стає рівним 0, видаляємо запис
        handleDelete(key);
      }
    }
  }
};


  const filter = () => {
    const array = searchDirect.toLowerCase().replace(/\s+/g, "");
    const filteredItems = dataStorage.filter((item: MyProducts) => {
      const values = Object.values(item);
      return values.some((value) => {
        if (typeof value === "string") {
          const formattedValue = value.toLowerCase().replace(/\s+/g, "");
          return formattedValue.includes(array);
        }
        return false;
      });
    });
    setFilteredItems(filteredItems);
  };

  const handleFilter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filter();
    }
  };

  useEffect(() => {
    setFilteredItems(dataStorage);
  }, [dataStorage]);

  return (
    <div className={"tableStorage"}>
      <div className={"searchItems"}>
        <div className="group">
          <input
            type="text"
            onChange={(e) => setSearchDirect(e.target.value)}
            onKeyDown={handleFilter}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Search items</label>
        </div>
        <Tooltip title="Search" className={"searchItemsbtn"}>
          <SearchIcon onClick={filter}></SearchIcon>
        </Tooltip>
      </div>
      <TotalSum />
      <div className={"tableStorageTb"}>
        <table>
          <thead>
            <tr>
              <th>{t("MARKETS.DEVICE")}</th>
              <th>{t("MARKETS.PRODUCT")}</th>
              <th>{t("MARKETS.CATEGORY")}</th>
              <th>{t("MARKETS.AMOUNT")}</th>
              <th>{t("MARKETS.PRICE")}</th>
              <th>{t("MARKETS.STATUS")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems?.map(
              ({ key, device, product, category, amount, price }) => {
                return (
                  <tr key={key}>
                    <td>{device}</td>
                    <td>{product}</td>
                    <td>{category}</td>
                    <td className={"amount"}>
                      <RemoveIcon onClick={() => handleDecrementAmount(key)} />
                      {amount}
                      <AddIcon onClick={() => handleIncrementAmount(key)} />
                    </td>
                    <td>{price} $</td>
                    <td>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(key)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableStorage;