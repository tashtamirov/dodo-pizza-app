import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import './scss/app.scss'
import FullPizza from './components/FullPizza';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizzas/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
