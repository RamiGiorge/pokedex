import PokemonGrid from '../components/pokemon-grid/PokemonGrid'
import SearchForm from '../components/search-form/SearchForm'
import { useContext } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'
import LoadingFB from '../components/fallback/LoadingFB'
import Gamepad from '../components/gamepad/Gamepad'

const Home = () => {
    const { pending, error } = useContext(PokemonsContext)

    return (
        <>
            <Gamepad />
            <SearchForm />
            {error && <div className='warning'>{error}</div>}
            {pending && <LoadingFB />}
            {!pending && !error && <PokemonGrid />}
        </>
    )
}

export default Home
