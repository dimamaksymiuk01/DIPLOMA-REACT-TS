import { useTranslation } from 'react-i18next';
import { MyProducts } from '../types/types.ts'
import { useFirebaseData } from '../services/firebase/getDataFromFirebase.ts'
import { PathData } from '../services/firebase/writeDataToFirebase.ts'

export function TotalSum() {
  const { t } = useTranslation();
  const dataStorage: MyProducts[] | undefined = useFirebaseData(PathData.storage);
  const totalSum = dataStorage
    ? dataStorage.reduce((accumulator, item) => {
        const price = parseInt(item.price || "0", 10); // Забезпечити, що price завжди є рядком
        const amount = parseInt(item.amount || "0", 10); // Забезпечити, що amount завжди є рядком
        const itemTotal = price * amount;
        return accumulator + itemTotal;
      }, 0)
    : 0; // Забезпечити значення за замовчуванням 0, якщо dataStorage є undefined

  console.log(totalSum);

  return (
    <>
      <div>
        <span>{t('MARKETS.BALANCE')}: {totalSum.toString()}$</span>
      </div>
    </>
  )
}
