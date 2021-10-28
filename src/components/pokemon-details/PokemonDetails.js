import { useHistory, useParams } from 'react-router'
import styles from './PokemonDetails.module.css'
import { v4 as uuidv4 } from 'uuid'
import Button from '../UI/Button'
import { PokemonsContext } from '../../context/PokemonsContext'
import { useContext, useState, useEffect } from 'react'

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState((null))
    const { id } = useParams()
    const history = useHistory()
    const { pokemons } = useContext(PokemonsContext)

    useEffect(() => {
        pokemons && pokemons.map(pokemon => id === pokemon.id.toString() ? setPokemon(pokemon) : null)
    }, [id, pokemons])

    const navigateBack = () => {
        history.push("/")
    }

    const renderDetails = () => {
        return (
            <div className={styles.pokemonDetails}>

                <div className={styles.generalInfo}>
                    {pokemon && <div className={styles.title}>{(pokemon.name).toUpperCase()} - {pokemon.id}</div>}

                    <div className={styles.status}>
                        Status: {pokemon.isCaptured ? <span>Caught</span> : <span>Uncaught</span>}
                    </div>

                    <img src={pokemon.sprites.back_default} alt="pokemon" />

                    <div className={styles.size}>
                        <div>Height: <span>{pokemon.height}</span></div>
                        <div>Weight: <span>{pokemon.weight}</span></div>
                    </div>
                </div>

                <div className={styles.detailedInfo}>
                    <h1 className={styles.title}>INFO</h1>

                    <div className={styles.typesContainer}>
                        <h3>Types</h3>
                        <div className={styles.types}>
                            {pokemon.types.map(({ type }) => <span key={uuidv4()} className={styles.type}>{type.name}</span>)}
                        </div>
                    </div>

                    <div className={styles.abilitiesContainer}>
                        <h3>Abilities</h3>
                        <div className={styles.abilities}>
                            {pokemon.abilities.map(({ ability }) => <span key={uuidv4()} className={styles.ability}>{ability.name}</span>)}
                        </div>
                    </div>

                    <ul className={styles.stats}>
                        {pokemon.stats.map(({ base_stat, stat }) => {
                            return <li key={uuidv4()} className={styles.stat}>
                                <span>{stat.name}:</span>
                                <span>{base_stat}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.detailsContainer}>
            <Button handleClick={navigateBack} />
            {pokemon && renderDetails()}
        </div >
    )
}

export default PokemonDetails
