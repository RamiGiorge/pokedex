import { useHistory, useLocation } from 'react-router'
import styles from './PokemonDetails.module.css'

const PokemonDetails = () => {
    const history = useHistory()
    const location = useLocation()
    const { pokemon } = location.state

    const navigateBack = () => {
        history.push("/")
    }

    return (
        <div className={styles.detailsContainer}>
            <button onClick={navigateBack}>Back</button>
            <div className={styles.pokemonDetails}>
                <div className={styles.generalInfo}>
                    <div>{pokemon.name} - {pokemon.id}</div>
                    <div>Status:</div>
                    <img src={pokemon.sprites.back_default} alt="pokemon" />
                </div>
                <div className={styles.detailedInfo}>
                    <div className={styles.types}>{pokemon.types.map(({ type }) => <span key={Math.random()} className={styles.type}>{type.name}</span>)}</div>

                </div>



            </div>
        </div>
    )
}

export default PokemonDetails
