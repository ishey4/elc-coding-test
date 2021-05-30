import { useEffect, useState } from "react"

import { productSearch } from "../../../../services/productSearch";

import { SearchResult } from '../types';

export const useRunSearch = (debounceTime=750) => {
    const [query, setQuery] = useState(null)
    const [debounceTimer, setDebounceTimer] = useState(null)

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<SearchResult[]>(null) 
    const [error, setError] = useState(null)

    const setRequestLoading = () => {
        setLoading(true);
        setData(null)
        setError(null)
     }

    const searchForProduct = (value) => {
        if (value && value.length > 2) {
            setRequestLoading();
            clearTimeout(debounceTimer)
            setDebounceTimer(setInterval(() => setQuery(value), debounceTime))
        }
    }

    useEffect(() => { 
        if (query && query.length > 2) {
            productSearch(query)
                .then(({data})=>setData(data))
                .catch(setError)
                .finally(() => setLoading(false))
        } 

    }, [query])

    return { data, loading, error, searchForProduct };
}