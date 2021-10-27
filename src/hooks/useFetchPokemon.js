import { useState, useEffect } from 'react'

const useFetchPokemon = (url) => {
    const [data, setData] = useState(null)
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

    return { pending, error, data }
}

export default useFetchPokemon
