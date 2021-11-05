import { useState, createContext, useEffect } from "react";
import useFetchPokemons from "../hooks/useFetchPokemons";

export const PokemonsContext = createContext();

export const PokemonProvider = (props) => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [pokemons, setPokemons] = useState(null)
    const [filtered, setFiltered] = useState(null)

    const { items, error, pending, nextUrl } = useFetchPokemons(url)

    useEffect(() => {
        setPokemons([...items].sort((a, b) => a.id - b.id))
    }, [items, setPokemons])

    return <PokemonsContext.Provider value={{ pokemons, setPokemons, setUrl, error, pending, nextUrl, filtered, setFiltered }}>{props.children}</PokemonsContext.Provider>;
};
