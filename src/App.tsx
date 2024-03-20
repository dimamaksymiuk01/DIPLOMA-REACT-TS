import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './modules/login/Login.tsx';
import Archive from './modules/archive/Archive.tsx';
import Markets from './modules/markets/Markets.tsx';
import Storage from './modules/storage/Storage.tsx';
import Repairs from './modules/repairs/Repairs.tsx';
import NotFound from './modules/notFound/NotFound.tsx';
import { ROUTES } from './common/types/enums.ts';
import ErrorPage from './common/components/errorPage/errorPage.tsx'
import { RepairsProvider } from './modules/repairs/RepairsContext.tsx'

import './App.css';


function App() {
  return (
    <Router>
      <RepairsProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.LOGIN} />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.MARKETS} element={<Markets />} errorElement={<ErrorPage />} />
          <Route path={ROUTES.ARCHIVE} element={<Archive />} errorElement={<ErrorPage />} />
          <Route path={ROUTES.STORAGE} element={<Storage />} errorElement={<ErrorPage />} />
          <Route path={ROUTES.REPAIRS} element={<RepairsProvider><Repairs /></RepairsProvider>} errorElement={<ErrorPage />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} errorElement={<ErrorPage />} />
        </Routes>
      </RepairsProvider>
    </Router>
  );
}

export default App;
