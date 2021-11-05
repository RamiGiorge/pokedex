import PokemonGrid from '../components/pokemon-grid/PokemonGrid'
import SearchForm from '../components/search-form/SearchForm'
import { useContext } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'

const Home = () => {
    const { pokemons, pending, error } = useContext(PokemonsContext)

    return (
        <>
            <SearchForm />
            {pending && <div className='warning'>loading...</div>}
            {error && <div className='warning'>{error}</div>}
            {pokemons && <PokemonGrid />}
        </>
    )
}

export default Home
