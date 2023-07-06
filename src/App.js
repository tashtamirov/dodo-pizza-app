import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import Header from './components/Header'
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import './scss/app.scss'

export const SearchContext = React.createContext()

const App = () => {

  const [searchValue, setSearchValue] = useState('')

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
