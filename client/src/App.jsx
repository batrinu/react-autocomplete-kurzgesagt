import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div className="hello-world-container">
        <h1 className="hello-world">hello world!</h1>        
      </div>      
    </main>
  </BrowserRouter>
);

export default App;
