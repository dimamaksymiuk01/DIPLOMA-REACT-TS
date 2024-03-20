import { useFirebaseData } from '../../../common/services/firebase/getDataFromFirebase.ts';
import { MyProducts } from '../../../common/types/types.ts';
import { PathData } from '../../../common/services/firebase/writeDataToFirebase.ts';
import { useRepairsContext } from '../RepairsContext.tsx'
import { deleteDataFromFirebase } from '../../../common/services/firebase/deleteFromData.ts'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'

export default function AccumulatorTable() {
  const { t } = useTranslation();
  const { selectedBrend } = useRepairsContext();

  let databasePath = PathData.appleaccumulator;

  if (selectedBrend === 'Samsung') {
    databasePath = PathData.samsungaccumulator;
  } else if (selectedBrend === 'Xiaomi') {
    databasePath = PathData.xiaomiaccumulator;
  } else if (selectedBrend === 'Redmi') {
    databasePath = PathData.redmiaccumulator;
  } else if (selectedBrend === 'Google') {
    databasePath = PathData.googleaccumulator;
  } else if (selectedBrend === 'Oppo') {
    databasePath = PathData.oppoaccumulator;
  } else if (selectedBrend === 'Motorola') {
    databasePath = PathData.motorolaaccumulator;
  } else if (selectedBrend === 'OnePlus') {
    databasePath = PathData.oneplusaccumulator;
  }

  const dataCutting: MyProducts[] = useFirebaseData(databasePath);
  const handleDelete = (id: string) => {deleteDataFromFirebase(databasePath, id).then(() => {});};

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{t("REPAIRS.DEVICE")}</th>
            <th>{t("REPAIRS.PRICE")}</th>
            <th>{t("REPAIRS.ADDITIONALLY")}</th>
          </tr>
        </thead>
        <tbody>
          {dataCutting?.map(({ key, device, price, additionally }) => {
            return (
              <tr key={key}>
                <td>{device}</td>
                <td>{price}</td>
                <td>{additionally}</td>
                <td className={'dltRep'}>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(key || "")}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
