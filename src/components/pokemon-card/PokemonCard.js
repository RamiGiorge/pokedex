import { Link } from "react-router-dom"
import styles from './PokemonCard.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'
import { useContext } from "react"

const PokemonCard = ({ pokemon }) => {
    const { pokemons, setPokemons } = useContext(PokemonsContext)

    const capturePokemon = (id) => {
        const pokiz = [...pokemons]
        pokiz.map((pokemon) => {
            if (pokemon.id === id) {
                pokemon.isCaptured = true
            }
            return pokemon
        })
        setPokemons(pokiz)
    }

    return (
        <div>
            <div key={pokemon.id} className={styles.card}>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{pokemon.name.toUpperCase()} - {pokemon.id} </h3>
                        <img src={pokemon.sprites.back_default} alt="pokemon" />
                        <div className={styles.types}>{pokemon.types.map(({ type }) => <span key={Math.random()} className={styles.type}>{type.name}</span>)}</div>
                    </div>
                </Link>
                <button onClick={() => capturePokemon(pokemon.id)} className={styles.captureBtn}>Capture</button>
            </div>
        </div>
    )
}

export default PokemonCard
