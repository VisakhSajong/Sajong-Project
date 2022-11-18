import React from 'react'
// import HomePage from './Pages/HomePage/HomePage'
import UserAccount from './Pages/UserAccount/UserAccount'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className='main'>
       {/* <Router>
      <Routes>
      <Route path='/' element={<HomePage />} >
      </Route>
      </Routes>
      </Router> */}
      <UserAccount />
    </div>
  )
}

export default App