import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { useFirebaseData } from '../../common/services/firebase/getDataFromFirebase.ts'
import { PathData, setDataToFirebase } from '../../common/services/firebase/writeDataToFirebase.ts'
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { avatarMap } from '../../common/shared/consts/picturesUrl.ts'
import { deleteDataFromFirebase } from '../../common/services/firebase/deleteFromData.ts'
import { LoginFormTable } from '../../common/types/types.ts'
import { useTranslation } from 'react-i18next';
import ArchiveIcon from '@mui/icons-material/Archive';
import MouseOverPopover from '../../common/components/Popover.tsx'

import '../../common/components/style/table.scss'


const Table = () => {
  const { t } = useTranslation();
  const dataRepaire: LoginFormTable[] = useFirebaseData(PathData.markets);

  const [userMaster, setUserMaster] = useState<string | null>(null);
  useEffect(() => {
    const userMasterData = localStorage.getItem('user');
    if (userMasterData !== null) {
      const parsedUserMaster = JSON.parse(userMasterData);
      if (typeof parsedUserMaster === 'string') {
        setUserMaster(parsedUserMaster);
      }
    }
  }, []);

  const [selectedMaster, setSelectedMaster] = useState<string | null>(null);
  const sortMasters = () => {
    setSelectedMaster((prevMaster) => (prevMaster === userMaster ? null : userMaster));
  };

  const handleDelete = (key: string) => {
    deleteDataFromFirebase(PathData.markets, key).then(() => {
      // Може бути виклик модалки про видалення
    });
  };

  const setInfoToArchive = async (key: string) => {
    // console.log('Set Info!');
    const element = dataRepaire.find((item) => item.key === key);
    if (element) {
      // console.log(element);
      await setDataToFirebase(PathData.archive, element).then(() => {
        console.log("Done");
      });
    }
  };

  const handleDeleteWithInfo = (key: string) => {
    setInfoToArchive(key); // Викликаємо setInfoToArchive
    handleDelete(key); // Викликаємо handleDelete
  };


  return (
    <>
      <div className='boxTable'>
        <table>
          <thead className={'theadMarkets'}>
            <tr>
              <th className={selectedMaster ? 'active' : ''}>
                {t('MARKETS.MASTER')}
                <BottomNavigation sx={{ width: 30, height: 0 }}>
                  <BottomNavigationAction onClick={sortMasters} icon={<FavoriteIcon />} />
                </BottomNavigation>
              </th>
              <th>{t('MARKETS.MARKET')}</th>
              <th>{t('MARKETS.CLIENT')}</th>
              <th>{t('MARKETS.DEVICE')}</th>
              <th>{t('MARKETS.PRODUCT')}</th>
              <th>{t('MARKETS.DATE')}</th>
              <th>{t('MARKETS.COMMIT')}</th>
              <th>{t('MARKETS.STATUS')}</th>
            </tr>
          </thead>
          <tbody className={'tbodyMarkets'}>
            {dataRepaire
              ?.filter((item) => !selectedMaster || item.master === selectedMaster)
              .sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf())
              .map(({ key, master, market, client, device, product, date, currentDate, comment }) => {
                const isPastDate = moment(date).isBefore(moment().startOf('day'));
                const isFutureDate = moment(date).isAfter(moment().endOf('day'));
                const rowClass = isPastDate ? "red" : isFutureDate ? "yellow" : "green";

                return (
                  <tr key={key} className={rowClass}>
                    <td><Avatar alt="Remy Sharp" src={avatarMap[master]} /></td>
                    <td>{market}</td>
                    <td>{client}</td>
                    <td>{device}</td>
                    <td>{product}</td>
                    <td>
                      <div>
                        <p>{t('MARKETS.ARRIVAL')}: {moment(date).format("MMM Do YY")}</p>
                        <p>{t('MARKETS.RESERVED')}: {moment(currentDate).format("MMM Do YY")}</p>
                      </div>
                    </td>
                    <td>{comment ? (<MouseOverPopover comment={comment} />) : null}</td>
                    <td>
                      <Tooltip title="Archive">
                        <IconButton onClick={() => handleDeleteWithInfo(key)}>
                          <ArchiveIcon className={"favoriteMasters"} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(key)}>
                          <DeleteIcon className={"favoriteMasters"} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
