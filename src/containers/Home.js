// import useFetchPokemons from '../hooks/useFetchPokemons'
import PokemonGrid from '../components/pokemon-grid/PokemonGrid'
import SearchForm from '../components/search-form/SearchForm'
import { useContext, useState } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'

const Home = () => {
    // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    // const { pending, error, data } = useFetchPokemons(url)
    const [filtered, setFiltered] = useState(null)
    const { pokemons, setUrl, pending, error, data } = useContext(PokemonsContext)
    // const sortedPokemons = items ? [...items].sort((a, b) => a.id - b.id) : []

    return (
        <>
            {pokemons && <SearchForm setFiltered={setFiltered} />}
            {/* <SearchForm pokemons={pokemons} setFiltered={setFiltered} /> */}
            {pending && <div className='warning'>loading...</div>}
            {error && <div className='warning'>{error}</div>}
            {pokemons && <PokemonGrid filtered={filtered} setFiltered={setFiltered} />}
            {/* {!pending && !error && <PokemonGrid pokemons={sortedPokemons} filtered={filtered} setFiltered={setFiltered} />} */}
            {!filtered && data && <button onClick={() => setUrl(data.next)} className='fetchMore'>Load more</button>}
        </>
    )
}

export default Home
