/* import logo from './logo.svg'; */
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListConatainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer text="Bienvenidos a FoodSpot!"/>
    </div>
  );
}

export default App;
