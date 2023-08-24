import { Link } from 'react-router-dom';
import { ROUTES} from "../../shared/types/enums.ts";
import { useTranslation } from 'react-i18next';

import '../style/burger.css';

function Burger() {
  const { t } = useTranslation();
  return (
    <div className="burgerMenu">
      <details>
        <summary></summary>
        <nav className="menu">
          <p><Link to={ROUTES.MARKETS}>{t('NAVMENU.MARKETS')}</Link></p>
          <p><Link to={ROUTES.ARCHIVE}>{t('NAVMENU.ARCHIVE')}</Link></p>
          <p><Link to={ROUTES.REPAIRS}>{t('NAVMENU.REPAIRS')}</Link></p>
          <p><Link to={ROUTES.STORAGE}>{t('NAVMENU.STORAGE')}</Link></p>
          {/*<p><Link to={ROUTES.CLIENTLIST}>{t('NAVMENU.CLIENTLIST')}</Link></p>*/}
          {/*<p><Link to={ROUTES.ADMIN}>{t('NAVMENU.ADMIN')}</Link></p>*/}
        </nav>
      </details>
    </div>
  );
}

export default Burger;