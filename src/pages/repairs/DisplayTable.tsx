import { useFirebaseData } from '../../services/firebase/getDataFromFirebase.ts';
import { MyProducts } from '../../shared/types/types.ts';
import { PathData } from '../../services/firebase/writeDataToFirebase.ts';
import { useRepairsContext } from './RepairsContext.tsx'
import { deleteDataFromFirebase } from '../../services/firebase/deleteFromData.ts'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'

export default function DisplayTable() {
  const { t } = useTranslation();
  const { selectedBrend } = useRepairsContext();

  let databasePath = PathData.appledisplay;

  if (selectedBrend === 'Samsung') {
    databasePath = PathData.samsungdisplay;
  } else if (selectedBrend === 'Xiaomi') {
    databasePath = PathData.xiaomidisplay;
  } else if (selectedBrend === 'Redmi') {
    databasePath = PathData.redmiadisplay;
  } else if (selectedBrend === 'Google') {
    databasePath = PathData.googledisplay;
  } else if (selectedBrend === 'Oppo') {
    databasePath = PathData.oppodisplay;
  } else if (selectedBrend === 'Motorola') {
    databasePath = PathData.motoroladisplay;
  } else if (selectedBrend === 'OnePlus') {
    databasePath = PathData.oneplusdisplay;
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
