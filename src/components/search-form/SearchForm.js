import { useState, useEffect, useContext, useRef } from 'react'
import styles from './SearchForm.module.css'
import { PokemonsContext } from '../../context/PokemonsContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchForm = () => {
    const [searchInput, setSearchInput] = useState('')
    const [showAutocomplete, setShowAutocomplete] = useState(null)
    const { pokemons, setFiltered } = useContext(PokemonsContext)
    const [suggestions, setSuggestions] = useState(null)
    const autoRef = useRef(null)

    useEffect(() => {
        const clickListen = (e) => {
            if (showAutocomplete && autoRef.current && !autoRef.current.contains(e.target)) setShowAutocomplete(false)
        }
        window.addEventListener('click', clickListen)
        return () => window.removeEventListener('click', clickListen)
    }, [showAutocomplete])

    useEffect(() => {
        setSuggestions(pokemons)
    }, [pokemons])

    const handleInputChange = (e) => {
        const input = e.target.value.trim()
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
        autocomplete.length ? setSuggestions(autocomplete) : setSuggestions(null)
        autocomplete.length ? setShowAutocomplete(true) : setShowAutocomplete(false)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchInput && !suggestions) return
        !searchInput ? setFiltered(null) : setFiltered(suggestions)
        setSuggestions(pokemons)
        setSearchInput('')
    }

    const handleSuggestionClick = (e) => {
        setFiltered(suggestions.filter(pokemon => pokemon.name === e.target.textContent))
        setSearchInput('')
        setSuggestions(pokemons)
        setShowAutocomplete(false)
    }

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchField}>
                <input type='text' value={searchInput} placeholder='Search pokemons by name, id or type!' onChange={handleInputChange} onClick={() => setShowAutocomplete(true)} />
                {showAutocomplete && <ul className={styles.autocomplete} ref={autoRef}>
                    {suggestions?.map((suggestion => {
                        return <li key={suggestion.id} onClick={handleSuggestionClick}>{suggestion.name}</li>
                    }))}</ul>}
                <button className={styles.searchBtn}><FontAwesomeIcon icon='search' className={styles.searchIcon} /></button>
            </div>
        </form>
    )
}

export default SearchForm
