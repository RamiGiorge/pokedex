import { useState, useEffect, useContext } from 'react'
import styles from './SearchForm.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchForm = ({ setFiltered }) => {
    const [searchInput, setSearchInput] = useState('')
    const [suggestions, setSuggestions] = useState(null)
    const [showAutocomplete, setShowAutocomplete] = useState(null)
    const { pokemons } = useContext(PokemonsContext)

    useEffect(() => {
        const clickListen = (e) => {
            if (!e.target.className.includes('autocomplate')) {
                setShowAutocomplete(false)
            }
        }
        window.addEventListener('click', clickListen)
        return () => window.removeEventListener('click', clickListen)
    }, [])


    const handleInputChange = (e) => {
        let input = e.target.value.trim()
        setSearchInput(input)
        let autocomplete = []
        pokemons.forEach(pokemon => {
            if ((pokemon.name).includes(input) || (pokemon.id).toString() === input) {
                autocomplete.push(pokemon)
            }
            pokemon.types.map(({ type }) => {
                return input === (type.name) ? autocomplete.push(pokemon) : null
            })
        })
        setSuggestions(autocomplete)
        setShowAutocomplete(true)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchInput) return
        setFiltered(suggestions)
        setSuggestions(null)
    }

    const handleAutocomplete = (e) => {
        setSearchInput(e.target.textContent)
        setSuggestions(suggestions.filter(pokemon => pokemon.name === e.target.textContent))
    }

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchField}>
                <input type='text' value={searchInput} placeholder='Search pokemons by name, id or type!' onChange={handleInputChange} />
                {showAutocomplete && <div className={styles.autocomplete}>{suggestions.map((suggestion => {
                    return <p key={suggestion.id} onClick={handleAutocomplete}>{suggestion.name}</p>
                }))}</div>}

                <button className={styles.searchBtn}>Search
                    {/* <FontAwesomeIcon icon="search" size="lg" className={styles.searchIcon} /> */}
                    {/* <FontAwesomeIcon icon='faSearch' /> */}
                </button>
            </div>
        </form>
    )
}

export default SearchForm
