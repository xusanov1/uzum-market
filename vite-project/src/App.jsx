import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './components/productContext/ProductContext';
import NavBar from './components/nav/Nav';
import Products from './components/product/Products';
import LikedProductsPage from './components/likedProduct/LikedProduct';
import Single from './components/single/Single';

import './index.css';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/liked-products" element={<LikedProductsPage />} />
          <Route path="/product/:productId" element={<Single />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
