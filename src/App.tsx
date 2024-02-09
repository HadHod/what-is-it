import React, { ReactElement } from 'react';
import './App.scss';

function App(): ReactElement {
  return (
    <>
      <ol>
        <li>Random image</li>
        <li>List</li>
        <li>Stats</li>
        <li>LogIn / Register</li>
      </ol>

      <ol>
        <li><a href="https://semaphoreci.com/blog/routing-layer-react">React routing</a></li>
        <li>testing</li>
        <li>backend (firebase?)</li>
      </ol>
    </>
  );
}

export default App;
