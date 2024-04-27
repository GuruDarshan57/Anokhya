import React from 'react'
import Home from './Pages/Home/Home'
import Coderelay from './Components/Event/CodeRelay'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events/code_relay' element={<Coderelay />} />
      </Routes>
    </Router>
  )
}

export default App