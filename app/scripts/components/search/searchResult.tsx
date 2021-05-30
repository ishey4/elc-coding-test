import * as  React from 'react';

import { SearchResult as ISearchResult } from "./types";

export const SearchResult = ({ result }: { result: ISearchResult }) => {
  const { name = "", _id, picture, about } = result;
  return (
    <div key={_id} className="search-result">
      <div className="image-div">
        <img src={picture} alt={name} />
      </div>
      <div>
        <div className="name">{name}</div>
        <div className="description">{about}</div>
      </div>
    </div>
  );
};