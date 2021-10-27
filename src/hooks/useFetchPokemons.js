import { useEffect, useState } from "react"

const usePokemonFetch = (url) => {
    const [data, setData] = useState(null)
    const [items, setItems] = useState([])
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, { signal: abortController.signal }).then(response => {
            if (!response.ok) throw Error("Fetching failed")
            return response.json()
        }).then(data => {
            setData(data)
            setPending(false)
            setError(null)
        }).catch(error => {
            if (error.name === 'AbortError') {
                setError(error.name)
            }
            setPending(false)
            setError(error.message)

        })
        return () => abortController.abort()
    }, [url])

    useEffect(() => {
        const abortController = new AbortController()
        if (data) {
            data.results.forEach((pokemon) => {
                fetch(pokemon.url, { signal: abortController.signal }).then(res => {
                    if (!res.ok) throw Error("Fetching failed")
                    return res.json()
                }).then((pokemon) => {

                    setItems(prevState => [...prevState, pokemon])
                }).catch(error => {
                    if (error.name === 'AbortError') {
                        setError(error.name)

                    }
                    setError(error.message)
                })
            })
        }
        return () => abortController.abort()
    }, [data])

    return { items, pending, error, data }
}

export default usePokemonFetch
