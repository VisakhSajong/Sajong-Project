import React from 'react'
import Footer from './Pages/HomePage/Footer'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserAccount from './Pages/UserAccount/UserAccount'


function App() {
  return (
    <div className='main'>

      <Router>
      <Routes>
      <Route exact path='/' element={<HomePage />}>
      </Route>
      </Routes>
      <Routes>
      <Route exact path='user' element={<UserAccount />}>
      </Route>
      </Routes>
      </Router>
    <Footer />
    </div>
  )
}

export default App