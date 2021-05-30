import * as React from "react";
import { useEffect, useState } from "react";

import { useRunSearch } from "./hooks/runSearch";
import { SearchLoading } from "./searchLoading";
import { SearchError } from "./searchError";
import { SearchResults } from "./searchResults";

export const SearchComponent = ({ visible, toggleSearchContainer }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, searchForProduct } = useRunSearch();

  const canSearch = searchTerm.length > 2;

  useEffect(() => {
    searchForProduct(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!visible) {
      setSearchTerm("");
    }
  },[visible])

  return !visible ? null : (
    <div className={"search-container"}>
      <input
        type="text"
        placeholder="Search (3 Chr min)"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <a href="#" onClick={toggleSearchContainer}>
        <i className="material-icons close">close</i>
      </a>

      <div className="search-results">
        {canSearch && loading ? <SearchLoading /> : null}
        {canSearch && error ? <SearchError error={error} /> : null}
        {canSearch && data ? <SearchResults results={data} /> : null}
      </div>
    </div>
  );
};
