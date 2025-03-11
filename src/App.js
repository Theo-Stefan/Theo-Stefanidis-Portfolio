import React from 'react';
import './App.css';
import './styles/global.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons (e.g., GitHub, LinkedIn)

library.add(fas, fab);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Career />
    </div>
  );
}

export default App;
