import { useTranslation } from 'react-i18next';
import { MyProducts } from '../shared/types/types.ts'
import { useFirebaseData } from '../services/firebase/getDataFromFirebase.ts'
import { PathData } from '../services/firebase/writeDataToFirebase.ts'

export function TotalSum() {
  const { t } = useTranslation();
  const dataStorage: MyProducts[] = useFirebaseData(PathData.storage);
  const totalSum = dataStorage?.reduce((accumulator, item) => {
    const price = parseInt(item.price, 10);
    const amount = parseInt(item.amount, 10);
    const itemTotal = price * amount;
    return accumulator + itemTotal;
  }, 0);

  console.log(totalSum);

  return (
    <>
      <div>
        <span>{t('MARKETS.BALANCE')}: {totalSum?.toString()}$</span>
      </div>
    </>
  )
}

export default TotalSum
