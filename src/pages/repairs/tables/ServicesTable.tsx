import { useFirebaseData } from '../../../services/firebase/getDataFromFirebase.ts';
import { MyProducts } from '../../../shared/types/types.ts';
import { PathData } from '../../../services/firebase/writeDataToFirebase.ts';
import { deleteDataFromFirebase } from '../../../services/firebase/deleteFromData.ts'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'

export default function ServicesTable() {
  const { t } = useTranslation();

  const databasePath = PathData.services;

  const dataCutting: MyProducts[] = useFirebaseData(databasePath);
  const handleDelete = (id: string) => {deleteDataFromFirebase(databasePath, id).then(() => {});};

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{t("REPAIRS.SERVICES")}</th>
            <th>{t("REPAIRS.PRICE")}</th>
          </tr>
        </thead>
        <tbody>
          {dataCutting?.map(({ key, device, price }) => {
            return (
              <tr key={key}>
                <td>{device}</td>
                <td>{price}</td>
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
