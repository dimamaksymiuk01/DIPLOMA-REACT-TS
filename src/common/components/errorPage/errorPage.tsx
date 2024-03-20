import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default  function ErrorPage() {
  const { t } = useTranslation();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    //Not Found
    if (error.status === 404) {
      return <h2>{t('ERROR.NOTFOUND')}</h2>;
    }
    //Unauthorized
    if (error.status === 401) {
      return <h2>{t('ERROR.UNAUTHORIZED')}</h2>;
    }
    //Service Unavailable
    if (error.status === 503) {
      return <h2>{t('ERROR.UNAVILABLE')}</h2>;
    }
    //I'm a teapot
    if (error.status === 418) {
      return <h2>🫖</h2>;
    }
  }

  return <h2>Something went wrong</h2>;
}
