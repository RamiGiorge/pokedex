import { useCallback, useEffect, useState } from "react"

const usePokemonFetch = (url) => {
    const [nextUrl, setNextUrl] = useState(null)
    const [items, setItems] = useState([])
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    const fetchPokemons = useCallback(async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) throw Error(`Fetching failed: server responded with a status of ${response.status}`)
            const { results, next } = await response.json()
            setNextUrl(next)
            results.map(async (result) => {
                try {
                    const res = await fetch(result.url)
                    if (!res.ok) throw Error(`Fetching failed: server responded with a status of ${res.status}`)
                    const pokemon = await res.json()
                    setItems(prevState => [...prevState, { ...pokemon, isCaptured: false }])
                } catch (e) {
                    setError(e.message)
                }
            })
        } catch (e) {
            setError(e.message)
        }
        setPending(false)
    }, [url])

    useEffect(() => {
        let isMounted = true
        if (isMounted) fetchPokemons()
        return () => isMounted = false
    }, [fetchPokemons])

    return { items, pending, error, nextUrl }
}

export default usePokemonFetch
