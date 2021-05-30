import * as  React from 'react';

import { SearchResult } from './searchResult'
import { NoResultsFound} from './noResultsFound'

export const SearchResults = ({ results }) => results.length
    ? results.map((result) => <SearchResult result={result} />)
    : <NoResultsFound />;
