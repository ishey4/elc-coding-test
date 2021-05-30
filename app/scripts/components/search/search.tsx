import * as React from "react";
import { useEffect, useState } from "react";

import { useRunSearch } from "./hooks/runSearch";
import { SearchLoading } from "./searchLoading";
import { SearchError } from "./searchError";
import { SearchResults } from "./searchResults";

export const SearchComponent = ({ visible, toggleSearchContainer }) => {
  const [queryInput, setQueryInput] = useState("");
  const { data, loading, error, setQuery } = useRunSearch();

  useEffect(() => {
    setQuery(queryInput);
  }, [queryInput]);

  return !visible ? null : (
    <div className={"search-container"}>
      <input
        type="text"
        onChange={(e) => {
          setQueryInput(e.target.value);
        }}
      />

      <a href="#" onClick={toggleSearchContainer}>
        <i className="material-icons close">close</i>
      </a>

      <div className="search-results">
        {loading ? <SearchLoading /> : null}
        {error ? <SearchError error={error} /> : null}
        {data ? <SearchResults results={data} /> : null}
      </div>
    </div>
  );
};
