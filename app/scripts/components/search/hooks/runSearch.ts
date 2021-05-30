import { useEffect, useState } from "react"

import { search } from '../../../../services/getSearchData'

import { SearchResult } from '../types';

export const useRunSearch = (debounceTime=750) => {
    const [query, localSetQuery] = useState(null)
    const [debounceTimer, setDebounceTimer] = useState(null)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<SearchResult[]>(null) 
    const [error, setError] = useState(null)

    const setRequestLoading = () => {
        setLoading(true);
        setData(null)
        setError(null)
     }

    const setQuery = (value) => {
        if (value) {
            setRequestLoading();
            clearTimeout(debounceTimer)
            setDebounceTimer(setInterval(() => localSetQuery(value), debounceTime))
        }
    }

    useEffect(() => { 
        if (query) {
            search(query)
                .then(({data})=>setData(data))
                .catch(setError)
                .finally(() => setLoading(false))
        }

    }, [query])

    return { data, loading, error, setQuery }

}