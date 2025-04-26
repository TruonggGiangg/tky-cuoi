import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutMain from '../components/layout';
import HomePage from '../components/home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<HomePage />} />
        {/* <Route path="gioi-thieu" element={<GioiThieuPage />} />
        <Route path="dao-tao" element={<DaoTaoPage />} />
        <Route path="tuyen-sinh" element={<TuyenSinhPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
