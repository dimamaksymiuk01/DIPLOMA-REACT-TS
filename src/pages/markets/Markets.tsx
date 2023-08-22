import Header from "../../components/header/Header.tsx";
import { useTranslation } from 'react-i18next';


export default function Markets() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h2>{t('PAGESNAME.MARKETS')}</h2>
    </>
  );
}