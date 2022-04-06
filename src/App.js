import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonsContext';
import "./components/fontawesome/FontAwesome";
import './App.css';
import LoadingFB from './components/fallback/LoadingFB'
import NotFound from './components/not-found/NotFound';
import Game from './containers/Game';

const Header = lazy(() => import('./components/header/Header'))
const Home = lazy(() => import('./containers/Home'))
const PokemonDetails = lazy(() => import('./components/pokemon-details/PokemonDetails'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFB />}>
        <div className="App">
          <Header title='pokédex' />
          <PokemonProvider>
            <Routes>
              <Route path='/pokedex' element={<Home />} />
              <Route path='/pokedex/pokemon/:id' element={<PokemonDetails />} />
              <Route path='/pokedex/game' element={<Game />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </PokemonProvider>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
