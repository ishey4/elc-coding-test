import * as  React from 'react';

import { SearchResult as ISearchResult } from "./types";

export const SearchResult = ({ result }: { result: ISearchResult }) => {
  const { name = "", _id, picture, about } = result;
  return (
    <div key={_id}>
      <img height="50" width="50" src={picture} alt={about} />
    </div>
  );
};