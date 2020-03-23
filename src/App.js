import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Auth />
      </Router>
    </div>
  );
}

export default App;
