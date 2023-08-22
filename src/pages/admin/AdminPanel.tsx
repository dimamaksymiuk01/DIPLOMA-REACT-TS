import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';
function AdminPanel() {
  const { t } = useTranslation();

  return (
    <>
        <Header/>
        <h2>{t('PAGESNAME.ADMIN')}</h2>
    </>
  )
}

export default AdminPanel