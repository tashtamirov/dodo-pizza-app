import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Header from './components/Header'
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import './scss/app.scss'

const App = () => {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue}  />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
