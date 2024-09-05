import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'

function App() {

  return (
    <Routes>
     <Route path='/'> 
      <Route index element={<HomePage />} />
     </Route>
    </Routes>
  )
}

export default App
