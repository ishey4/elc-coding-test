import React from 'react';

export const SearchResult = ({ result }) => {
    const { name = '' } = result
    console.log("single result", {result})
    return <div> {name} </div>
 }