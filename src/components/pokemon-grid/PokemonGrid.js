import { useContext, useState } from 'react'
import PokemonCard from '../pokemon-card/PokemonCard'
import styles from './PokemonGrid.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'
import Button from '../UI/Button'
import Tabs from '../tabs/Tabs'

const PokemonGrid = ({ filtered, setFiltered }) => {
    const [activeTab, setActiveTab] = useState('All')
    const { pokemons } = useContext(PokemonsContext)
    const tabs = ['All', 'Caught', 'Uncaught']
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
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {filtered && <Button handleClick={handleClick} />}
            <div className={styles.pokemonGrid}>
                {renderPokemons()}
            </div>
        </>
    )
}

export default PokemonGrid
