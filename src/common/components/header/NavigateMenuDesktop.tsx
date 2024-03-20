import { Link } from 'react-router-dom';
import { ROUTES} from "../../types/enums.ts";
import LogoUkrMobil from './logoUkrMobil.tsx'
import Logout from './LogoutBtn.tsx'
import SelectLanguage from './Language.tsx'
import { useTranslation } from 'react-i18next';

import '../style/navigate.scss';

function NavigateDesktop() {
    const { t } = useTranslation();

  return (
    <div className="navigateMenu">
      <LogoUkrMobil/>

      <nav className="navMenu">
        <Link to={ROUTES.MARKETS}>{t('NAVMENU.MARKETS')}</Link>
        <Link to={ROUTES.ARCHIVE}>{t('NAVMENU.ARCHIVE')}</Link>
        <Link to={ROUTES.REPAIRS}>{t('NAVMENU.REPAIRS')}</Link>
        <Link to={ROUTES.STORAGE}>{t('NAVMENU.STORAGE')}</Link>
        <div className="dot"></div>
      </nav>

      <div className={'langAndLogout'}>
        <SelectLanguage/>
        <Logout/>
      </div>
    </div>
  );
}

export default NavigateDesktop;
