import React from 'react';
import './App.css';
import { ApiProvider } from './MyAxios';
import Tablazat from './components/Tablazat';

function App() {
  return (
    <ApiProvider>
      <div className="container">
        <header className="App-header">
          <h1>Frontend-webáruház</h1>
        </header>
        <main>
          <Tablazat />
        </main>
      </div>
    </ApiProvider>
  );
}

export default App;
