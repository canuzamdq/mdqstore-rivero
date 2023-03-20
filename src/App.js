import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import ItemsDetailsContainer from './components/ItemDetailsContainer/ItemsDetailsContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainter/>} />
          <Route path='/category/:categoryID' element={<ItemListContainter />} />
          <Route path='/item/:id' element={<ItemsDetailsContainer />} />
          <Route path='*' element={<div><h1>La página no existe</h1></div>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>   
    </BrowserRouter>

  );
}

export default App;
