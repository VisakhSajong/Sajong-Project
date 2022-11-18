import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
       <Router>
      <Routes>
      <Route path='/' element={<HomePage />} >
      </Route>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App