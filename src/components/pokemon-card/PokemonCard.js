import { Link } from "react-router-dom"
import styles from './PokemonCard.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'
import { useContext } from "react"

const PokemonCard = ({ pokemon }) => {
    const { pokemons, setPokemons } = useContext(PokemonsContext)

    const handleCapture = (id) => {
        const pokiz = [...pokemons]
        pokiz.map((pokemon) => pokemon.id === id ? pokemon.isCaptured = !pokemon.isCaptured : null)
        setPokemons(pokiz)
    }

    return (
        <div className={styles.cardContainer}>
            <div key={pokemon.id} className={pokemon.isCaptured ? `${styles.card} ${styles.captured}` : styles.card}>
                <Link to={{
                    pathname: `/pokemon/${pokemon.id}`,
                    state: {
                        pokemon
                    }
                }} >
                    <div className={styles.content}>
                        <h3 className={styles.title}>{pokemon.name.toUpperCase()} - {pokemon.id} </h3>
                        <img src={pokemon.sprites.back_default} alt="pokemon" />
                        <div className={styles.types}>{pokemon.types.map(({ type }) => <span key={Math.random()} className={styles.type}>{type.name}</span>)}</div>
                    </div>
                </Link>
            </div>
            <button onClick={() => handleCapture(pokemon.id)} className={styles.captureBtn}>{pokemon.isCaptured ? 'Release' : 'Catch'}</button>
        </div >
    )
}

export default PokemonCard
