import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Archive from './pages/archive/Archive.tsx';
import Markets from './pages/markets/Markets.tsx';
import Storage from './pages/storage/Storage.tsx';
import Repairs from './pages/repairs/Repairs.tsx';
import NotFound from './pages/notFound/NotFound.tsx';
import { ROUTES } from './shared/types/enums.ts';
import ErrorPage from './components/errorPage/errorPage.tsx'
import { RepairsProvider } from './pages/repairs/RepairsContext.tsx'

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