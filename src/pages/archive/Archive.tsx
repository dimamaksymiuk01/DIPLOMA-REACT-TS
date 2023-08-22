import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';

function Archive() {
  const { t } = useTranslation();

  return (
    <>
      <Header/>
      <h2>{t('PAGESNAME.ARCHIVE')}</h2>
    </>
  )
}

export default Archive