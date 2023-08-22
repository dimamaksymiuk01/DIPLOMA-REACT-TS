import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';

function Storage() {
  const { t } = useTranslation();

  return (
    <>
        <Header/>
        <h2>{t('PAGESNAME.STORAGE')}</h2>
    </>
  )
}

export default Storage