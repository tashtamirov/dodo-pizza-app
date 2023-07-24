import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Home from './pages/Home';
import './scss/app.scss'
import Layout from './components/layouts/Layout';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './components/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './components/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Suspense><Cart /></Suspense>} />
        <Route path='pizzas/:id' element={<Suspense><FullPizza /></Suspense>} />
        <Route path='*' element={<Suspense><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
