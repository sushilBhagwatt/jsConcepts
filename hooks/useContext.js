import React, { useContext } from 'react';
// The useContext hook allows you to access a context object in a functional component.
// Context is a way to pass data down the component tree without having to pass props manually.

const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      Toggle Theme
    </button>
  );
}