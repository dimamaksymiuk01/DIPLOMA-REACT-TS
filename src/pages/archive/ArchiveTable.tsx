import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts'
import { PathData } from '../../services/firebase/writeDataToFirebase.ts'
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { avatarMap } from '../../shared/consts/picturesUrl.ts'
import { deleteDataFromFirebase } from '../../services/firebase/deleteFromData.ts'
import { LoginFormTable } from '../../shared/types/types.ts'
import { useTranslation } from 'react-i18next';
import MouseOverPopover from '../../components/Popover.tsx'

import '../../components/style/table.scss'

export default function ArchiveTable() {
  const { t } = useTranslation();
  const dataArchive: LoginFormTable[] = useFirebaseData(PathData.archive);

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

    const handleDelete = (id: string) => {
    deleteDataFromFirebase(PathData.archive, id).then(() => {
      //може бути виклик модалки
    });
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
            {dataArchive
              ?.filter((item) => !selectedMaster || item.master === selectedMaster)
              .sort((b, a) => moment(a.date).valueOf() - moment(b.date).valueOf())
              .map(({ key, master, market, client, device, product, date, currentDate, comment }) => {
                return (
                  <tr key={key}>
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
}