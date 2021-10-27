import './App.css';
import Header from './components/header/Header';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PokemonDetails from './components/pokemon-details/PokemonDetails';
import { PokemonProvider } from './context/PokemonsContext';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <PokemonProvider>
              <Home />
            </PokemonProvider>
          </Route>
          <Route path='/pokemon/:id'>
            <PokemonDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
