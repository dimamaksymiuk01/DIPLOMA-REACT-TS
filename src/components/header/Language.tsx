import { ENGLISH, UKRAINE } from '../../shared/consts/picturesUrl.ts'
import { useTranslation } from 'react-i18next';
import { Locale } from '../../shared/types/interfaces.ts'

import '../style/navigate.scss'

const locales: Record<string, Locale> = {
  en: { title: 'English' },
  ua: { title: 'Ukraine' },
};

const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
  };

return (
  <div className={'setLanguage'}>
    {Object.keys(locales).map((locale) => (
      <button
        key={locale}
        onClick={() => changeLanguage(locale)}
      >
        {locale === 'en' ? (
          <img src={ENGLISH} alt={`${locales[locale].title} Flag`} />
        ) : (
          <img src={UKRAINE} alt={`${locales[locale].title} Flag`} />
        )}
      </button>
    ))}
  </div>
);

}

export default SelectLanguage;


