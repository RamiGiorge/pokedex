import { useParams } from 'react-router'
import useFetchPokemon from '../../hooks/useFetchPokemon'
import styles from './PokemonDetails.module.css'

const PokemonDetails = () => {
    const { id } = useParams()
    const { data: pokemon, error, pending } = useFetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return (
        <div className={styles.pokemonDetails}>
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {pokemon && <div>{pokemon.name}</div>}
        </div>
    )
}

export default PokemonDetails
