import { MyProducts } from '../../shared/types/types.ts'
import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts'
import { PathData } from '../../services/firebase/writeDataToFirebase.ts'
import { deleteDataFromFirebase } from '../../services/firebase/deleteFromData.ts'
import { useState } from 'react'
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next';

import '../../components/style/storage.scss'



export const TableStorage = () => {
  const { t } = useTranslation();
  const dataStorage: MyProducts[] = useFirebaseData(PathData.storage);

  // пошуковий рядок
  const [searchDirect, setSearchDirect] = useState<string>('');

  // стан для збереження відфільтрованого масиву
  const [filteredItems, setFilteredItems] = useState<MyProducts[]>(dataStorage);
  const handleDelete = (id: string) => {
    deleteDataFromFirebase(PathData.storage, id).then(() => {
      //може бути виклик модалки
    });
  };

  const filter = () => {
    const array: string = searchDirect;
    const filteredItems: MyProducts[] = dataStorage.filter((item: MyProducts) => {
      const values = Object.values(item);
      return values.some((value) => {
        if (typeof value === 'string') {
          return value.includes(array);
        }
        return false;
      });
    });

    setFilteredItems(filteredItems);
  };

  React.useEffect(() => { //по дефолту через фільтр у нас табличка не грузить, тому ефект відмальовує її
    setFilteredItems(dataStorage);
  }, [dataStorage]);

  return (
    <div className={'tableStorage'}>

      <div className={'searchItems'}>
      <div className="group">
        <input type="text"
               onChange={(e) => setSearchDirect(e.target.value)}
               required
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Search items</label>
      </div>
      {/*<button onClick={filter}>search</button>*/}
        <Tooltip title="Search" className={'searchItemsbtn'}>
          <SearchIcon onClick={filter}></SearchIcon>
        </Tooltip>
        </div>

      <div className={'tableStorageTb'}>
        <table>
          <thead>
            <tr>
              <th>{t('MARKETS.DEVICE')}</th>
              <th>{t('MARKETS.PRODUCT')}</th>
              <th>{t('MARKETS.CATEGORY')}</th>
              <th>{t('MARKETS.AMOUNT')}</th>
              <th>{t('MARKETS.PRICE')}</th>
              <th>{t('MARKETS.STATUS')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems?.map(({ key, device, product, category, amount, price }) => {
              return (
                <tr key={key}>
                  <td>{device}</td>
                  <td>{product}</td>
                  <td>{category}</td>
                  <td>{amount}</td>
                  <td>{price} $</td>
                  <td><Tooltip title="Delete"><IconButton onClick={() => { handleDelete(key) }}><DeleteIcon /></IconButton></Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};