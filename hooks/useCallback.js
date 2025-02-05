import React, { useState, useCallback } from 'react';
// The useCallback hook allows you to memoize a function so that it’s only re-created when its dependencies change. 
// This can help improve performance by preventing unnecessary re-renders.
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback(event => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <input type="text" value={query} onChange={handleQueryChange} />
  );
}