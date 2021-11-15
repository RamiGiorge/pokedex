import './App.css';
import Header from './components/header/Header';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonDetails from './components/pokemon-details/PokemonDetails';
import { PokemonProvider } from './context/PokemonsContext';
import "./components/fontawesome/FontAwesome";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title='pokédex' />
        <PokemonProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
          </Routes>
        </PokemonProvider>
      </div>
    </Router>
  );
}

export default App;
