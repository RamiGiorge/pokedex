import { useContext, useState } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import styles from './PokemonGrid.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'

const PokemonGrid = ({ filtered, setFiltered }) => {
    const [activeTab, setActiveTab] = useState('All')
    const { pokemons } = useContext(PokemonsContext)
    const tabs = ['All', 'Caught', 'Uncaught']
    const data = filtered ? filtered : pokemons

    const renderPokemons = () => {
        switch (activeTab) {
            case 'Caught':
                return pokemons.map(pokemon => pokemon.isCaptured ? <PokemonCard pokemon={pokemon} key={pokemon.id} /> : null)
            case 'Uncaught':
                const uncaptured = pokemons.filter((pokemon) => !pokemon.isCaptured)
                return uncaptured.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
            default:
                return data.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
        }
    }

    return (
        <>
            <div className={styles.tabs}>
                {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? styles.activeTab : styles.tab}>{tab}</button>)}
            </div>
            {filtered && <button className={styles.backBtn} onClick={() => setFiltered(null)}>Back</button>}
            <div className={styles.pokemonGrid}>
                {renderPokemons()}
            </div>
        </>
    )
}

export default PokemonGrid
