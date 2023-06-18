import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header'
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import './scss/app.scss'

const App = () => {

  return (
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
  );
}

export default App;
