import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../components/private-route/privateRoute';


type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage offersCount={offersCount} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='Offer/:id' element={<Offer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
