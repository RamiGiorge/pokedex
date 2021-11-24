import { useContext, useMemo, useState } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import styles from './PokemonGrid.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PokemonsContext } from '../../context/PokemonsContext'
import Tabs from '../tabs/Tabs'
import Button from '../UI/Button'

const PokemonGrid = () => {
    const [activeTab, setActiveTab] = useState('All')
    const { pokemons, filtered, setFiltered, nextUrl, setUrl } = useContext(PokemonsContext)
    const tabs = useMemo(() => ['All', 'Caught', 'Uncaught'], [])
    const data = filtered ? filtered : pokemons

    const renderPokemons = () => {
        switch (activeTab) {
            case 'Caught':
                return data.map(pokemon => pokemon.isCaptured ? <PokemonCard pokemon={pokemon} key={pokemon.id} /> : null)
            case 'Uncaught':
                return data.map(pokemon => !pokemon.isCaptured ? <PokemonCard pokemon={pokemon} key={pokemon.id} /> : null)
            default:
                return data.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
        }
    }

    const handleClick = () => {
        setFiltered(null)
        setActiveTab('All')
    }

    return (
        <>
            <div className={styles.barWrapper}>
                {filtered && <Button handleClick={handleClick}>Back</Button>}
                <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className={styles.pokemonGrid}>
                {renderPokemons()}
            </div>
            {!filtered && activeTab === 'All' && nextUrl && <button onClick={() => setUrl(nextUrl)} className='fetchMore'>
                <FontAwesomeIcon icon='chevron-down' className='fetchIcon' />
            </button>}
        </>
    )
}

export default PokemonGrid
