import React, { useEffect, useState } from 'react';

import { useRunSearch } from './hooks/runSearch';
import { SearchLoading } from './searchLoading';
import { SearchError } from './searchError';
import { SearchResults } from './searchResults';

export const SearchComponent = ({ visible, toggleSearchContainer }) => {

    const [queryInput, setQueryInput] = useState('');
    const { data, loading, error, setQuery } = useRunSearch()

    useEffect(() => {
        setQuery(queryInput)
    },[queryInput])

    console.log({ data, loading, error, setQuery})
    return !visible ? null : <div className={"search-container"}>
        <input type="text" onChange={(e) => { setQueryInput(e.target.value) }} />
        <a href="#" onClick={toggleSearchContainer}>
            <i className="material-icons close">close</i>
        </a>
        <div>
            {loading ? <SearchLoading /> : null}
            {error ? <SearchError error={error} /> : null}
            {data ? <SearchResults results={data} /> : null}
        </div>

    </div>
};  