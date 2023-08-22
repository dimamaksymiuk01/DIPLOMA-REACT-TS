import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';

function ClientList() {
    const { t } = useTranslation();

  return (
    <>
        <Header/>
        <h2>{t('PAGESNAME.CLIENTLIST')}</h2>
    </>
  )
}

export default ClientList