import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const [scrollEvent, setScrollEvent] = useState(false);

  return (
    <div className='App'>
      <div className='main'>
        <NavBar scrollEvent={scrollEvent} />
        <Home setScrollEvent={setScrollEvent} />
      </div>
    </div>
  );
}

export default App;
