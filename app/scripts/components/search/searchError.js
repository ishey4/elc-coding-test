import React from 'react';

export const SearchError = ({ error }) => {
    console.error("Search Error", { error });
    return <div>Error!</div>
}