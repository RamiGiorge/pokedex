import { useContext, useState } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import styles from './PokemonGrid.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'

const PokemonGrid = ({ filtered, setFiltered }) => {
    const [activeTab, setActiveTab] = useState('All')
    const { pokemons } = useContext(PokemonsContext)
    const tabs = ['All', 'Captured', 'Uncaptured']
    const data = filtered ? filtered : pokemons

    const renderPokemons = () => {
        switch (activeTab) {
            case 'Captured':
                return (
                    <div className={styles.pokemonGrid}>
                        {pokemons.map(pokemon => {
                            return pokemon.isCaptured ? <PokemonCard pokemon={pokemon} key={pokemon.id} /> : null
                        })}
                    </div>
                )
            case 'Uncaptured':
                const uncaptured = pokemons.filter((pokemon) => !pokemon.isCaptured)
                return (
                    <div className={styles.pokemonGrid}>
                        {uncaptured.map(pokemon => {
                            return <PokemonCard pokemon={pokemon} key={pokemon.id} />
                        })}
                    </div>
                )
            default:
                return (
                    <div className={styles.pokemonGrid}>
                        {data.map(pokemon => {
                            return (
                                <PokemonCard pokemon={pokemon} key={pokemon.id} />
                            )
                        })}
                    </div>
                )
        }
    }

    return (
        <>
            <div className={styles.tabs}>
                {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>)}
            </div>
            {filtered && <button className={styles.backBtn} onClick={() => setFiltered(null)}>Back</button>}
            {renderPokemons()}
        </>
    )
}

export default PokemonGrid
