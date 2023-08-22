import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Archive from './pages/archive/Archive.tsx';
import Markets from './pages/markets/Markets.tsx';
import Storage from './pages/storage/Storage.tsx';
import Repairs from './pages/repairs/Repairs.tsx';
import NotFound from './pages/notFound/NotFound.tsx';
import AdminPanel from './pages/admin/AdminPanel.tsx';
import ClientList from './pages/clientList/ClientList.tsx';
import { ROUTES } from './shared/types/enums.ts';


import './App.css';
import ErrorPage from './components/errorPage/errorPage.tsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.LOGIN} />}/>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.MARKETS} element={<Markets />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.ARCHIVE} element={<Archive />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.STORAGE} element={<Storage />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.REPAIRS} element={<Repairs />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.ADMIN} element={<AdminPanel />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.CLIENTLIST} element={<ClientList />} errorElement={<ErrorPage/>}/>
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} errorElement={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;