import { useNavigate, useParams } from 'react-router'
import styles from './PokemonDetails.module.css'
import { v4 as uuidv4 } from 'uuid'
import Button from '../UI/Button'
import { PokemonsContext } from '../../context/PokemonsContext'
import { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState((null))
    const { id } = useParams()
    const navigate = useNavigate()
    const { pokemons } = useContext(PokemonsContext)

    useEffect(() => {
        pokemons && pokemons.map(pokemon => id === pokemon.id.toString() ? setPokemon(pokemon) : null)
    }, [id, pokemons])

    const navigateBack = () => {
        navigate("/pokedex")
    }

    const navigatePrevPokemon = () => {
        let index = parseInt(id)
        if (index === 1) index = pokemons.length + 1
        navigate(`/pokedex/pokemon/${index - 1}`)
    }

    const navigateNextPokemon = () => {
        let index = parseInt(id)
        if (index === pokemons.length) index = 0
        navigate(`/pokedex/pokemon/${index + 1}`)
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
                        <div className={styles.types} >
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
            <Button handleClick={navigateBack}>Back</Button>
            <div className={styles.pokemonContainer}>
                <FontAwesomeIcon icon='caret-left' size='3x' onClick={navigatePrevPokemon} className={styles.navigationIcons + 'prev pointer'} />
                {pokemon && renderDetails()}
                <FontAwesomeIcon icon='caret-right' size='3x' onClick={navigateNextPokemon} className={styles.navigationIcons + 'next pointer'} />
            </div>
        </div >
    )
}

export default PokemonDetails
