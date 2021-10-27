import PokemonGrid from '../components/pokemon-grid/PokemonGrid'
import SearchForm from '../components/search-form/SearchForm'
import { useContext, useState } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'

const Home = () => {
    const [filtered, setFiltered] = useState(null)
    const { pokemons, setUrl, pending, error, data } = useContext(PokemonsContext)

    return (
        <>
            {pokemons && <SearchForm setFiltered={setFiltered} />}
            {pending && <div className='warning'>loading...</div>}
            {error && <div className='warning'>{error}</div>}
            {pokemons && <PokemonGrid filtered={filtered} setFiltered={setFiltered} />}
            {!filtered && data && <button onClick={() => setUrl(data.next)} className='fetchMore'>Load more</button>}
        </>
    )
}

export default Home
