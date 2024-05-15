import React from 'react'
import Home from './Pages/Home/Home'
import Event from './Components/Event/Event'
import Sponsor_route from './Components/Sponsor_route/Sponsor_route'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events/:id' element={<Event />} />
        <Route path='/sponsor/CocoaCounty' element={<Sponsor_route/>}/>
      </Routes>
    </Router>
  )
}

export default App