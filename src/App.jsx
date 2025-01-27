import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Temp from './pages/Temp.jsx';
import Game from './pages/Game.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App;