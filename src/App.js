import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainter greeting="Proximamente encontrará el listado de productos en esta sección" />
    </div>
  );
}

export default App;
