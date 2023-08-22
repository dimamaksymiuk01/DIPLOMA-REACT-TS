import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';


function Repairs() {
    const { t } = useTranslation();

  return (
    <>
        <Header/>
        <h2>{t('PAGESNAME.REPAIRS')}</h2>
    </>
  )
}

export default Repairs