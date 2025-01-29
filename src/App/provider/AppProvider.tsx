import { Route, Routes } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';

const AppProvider = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/tanstack" element={<TanstackPlaces />} /> */}
      
    </Routes>
  );
};

export default AppProvider;
