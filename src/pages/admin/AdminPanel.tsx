import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';
function AdminPanel() {
  const { t } = useTranslation();

  return (
    <>
        <Header/>
      <h1>test</h1>
        <h2>{t('PAGESNAME.ADMIN')}</h2>
    </>
  )
}

export default AdminPanel