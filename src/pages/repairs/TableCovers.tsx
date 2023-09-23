import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts';
import { MyProducts } from '../../shared/types/types.ts';
import { PathData } from '../../services/firebase/writeDataToFirebase.ts';
import { useRepairsContext } from './RepairsContext.tsx'
import { deleteDataFromFirebase } from '../../services/firebase/deleteFromData.ts'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'

export default function CoversTable() {
  const { t } = useTranslation();
  const { selectedBrend } = useRepairsContext();

  let databasePath = PathData.applecovers;

  if (selectedBrend === 'Samsung') {
    databasePath = PathData.samsungcovers;
  } else if (selectedBrend === 'Xiaomi') {
    databasePath = PathData.xiaomicovers;
  } else if (selectedBrend === 'Redmi') {
    databasePath = PathData.redmicovers;
  } else if (selectedBrend === 'Google') {
    databasePath = PathData.googlecovers;
  } else if (selectedBrend === 'Oppo') {
    databasePath = PathData.oppocovers;
  } else if (selectedBrend === 'Motorola') {
    databasePath = PathData.motorolacovers;
  } else if (selectedBrend === 'OnePlus') {
    databasePath = PathData.onepluscovers;
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
          </tr>
        </thead>
        <tbody>
          {dataCutting?.map(({ key, device, price }) => {
            return (
              <tr key={key}>
                <td>{device}</td>
                <td>{price}</td>
                <td>
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
