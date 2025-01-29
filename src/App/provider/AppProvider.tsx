import { Route, Routes } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import TanstackPlaces from '../../pages/Place/components/TanstackPlaces';

const AppProvider = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tanstack" element={<TanstackPlaces />} />
      
    </Routes>
  );
};

export default AppProvider;
