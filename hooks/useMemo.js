import React, { useState, useMemo } from 'react';

// The useMemo hook allows you to memoize a value so that it’s only re-computed when its dependencies change. 
// This can help improve performance by preventing unnecessary re-computations.

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return a * b;
  }, [a, b]);

  return <p>Result: {result}</p>;
}