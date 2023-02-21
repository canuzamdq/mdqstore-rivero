import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import ItemsDetailsContainer from './components/ItemDetailsContainer/ItemsDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainter/>} />
        <Route path='/category/:categoryID' element={<ItemListContainter />} />
        <Route path='/item/:id' element={<ItemsDetailsContainer />} />
        <Route path='*' element={<div><h1>La página no existe</h1></div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
