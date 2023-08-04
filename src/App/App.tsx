import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Products from '../Components/Products/Products';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='*' element={<ErrorPage />} />
      <Route path='products/:productId' element={<Products />} />
   </Routes>
  );
}

export default App;
