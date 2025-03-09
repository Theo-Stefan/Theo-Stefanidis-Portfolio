import React from 'react';
import './App.css';
import './styles/global.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
